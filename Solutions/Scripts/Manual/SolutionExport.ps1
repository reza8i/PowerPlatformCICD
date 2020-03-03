﻿$Text = "Solution Management"
$UniqueId = "SolutionMGMT"

######################## SETUP 
Write-Host "Initialising Setup ...."
. ".\\..\_SetupTools.ps1"
. ".\\..\_Config.ps1"

InstallToastModule
    $message = "Installing Solution Management Tools..."
    Write-Host $message
    $ProgressBar = New-BTProgressBar -Status $message -Value 0.05
    New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId


InstallXrmDataModule
InstallCoreTools
InstallDevOpsDataModule

######################## GET CONNECTION

if (!$Credentials) {
    $message = "Getting Credentials for $global:ServerUrl"
    Write-Host $message
    $ProgressBar = New-BTProgressBar -Status $message -Value 0.1
    New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

    $Credentials = Get-Credential -Message "Credentials : $global:SolutionName @ $global:ServerUrl"
}

$message = "Establishing connection to $global:ServerUrl"
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.2
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

$conn = Connect-CrmOnline -Credential $Credentials -ServerUrl $global:ServerUrl

Write-Output($conn)

######################## Generate Config Migration data 
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.3
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

& ".\\..\_ConfigMigration.ps1"

######################## Generate Types
Write-Host("Cleaning up Context Files...")
#& ((Split-Path $MyInvocation.InvocationName) + "\..\_GenerateTypes.ps1")

######################## UPDATE VERSION
$message = "Updating Solution version for $global:SolutionName"
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.4
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

######################## CHECK SOLUTION
# Get solution by name
$SolutionQuery = Get-CrmRecords -conn $conn -EntityLogicalName solution -Fields 'friendlyname', 'version' -FilterAttribute uniquename -FilterOperator eq -FilterValue  $global:SolutionName
$Solution = $SolutionQuery.CrmRecords[0]
if (!$Solution) { throw "Solution not found:  $global:SolutionName" }
$SolutionId = $Solution.solutionid
$SolutionVersion = $Solution.version
Write-Host "Found:" $SolutionId "-" $Solution.friendlyname  "-" $SolutionVersion

# Get most recent patch solution
$PatchQuery = Get-CrmRecordsByFetch -conn $conn @"
<fetch>
  <entity name="solution" >
    <attribute name="uniquename" />
    <attribute name="friendlyname" />
    <attribute name="version" />
    <filter>
      <condition attribute="parentsolutionid" operator="eq" value="$SolutionId" />
    </filter>
    <order attribute="createdon" descending="true" />
  </entity>
</fetch>
"@ -TopCount 1
$PatchSolution = $PatchQuery.CrmRecords[0]
if ($PatchSolution) {
    $SolutionId = $PatchSolution.solutionid
    $SolutionName = $PatchSolution.uniquename
    $SolutionVersion = $PatchSolution.version
    Write-Host "Patch found:" $SolutionId "-" $global:SolutionName "-" $SolutionVersion
}

#Major.Minor.Build.Revision = TargetProductionDrop.Year+DayofYear.PatchNumber.BuildTime
$theVersion = [version]$SolutionVersion
$newVersion = "{0}.{1}{2}.{3}.{4}" -f $theVersion.Major, (Get-Date -UFormat %y),(Get-Date -UFormat %j).PadLeft(3,'0'), $theVersion.Build , (Get-Date -UFormat %H%M)
if ($PatchSolution) {
	$newVersion = "{0}.{1}.{2}.{3}" -f $theVersion.Major, $theVersion.Minor, $theVersion.Build , $theVersion.Revision + 1
}
Set-CrmSolutionVersionNumber -conn $conn -SolutionName  $global:SolutionName -VersionNumber $newVersion

######################## EXPORT SOLUTION
$message = "Exporting Unmanaged Solution for $global:SolutionName"
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.5
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

Export-CrmSolution -SolutionName $global:SolutionName -SolutionZipFileName "$global:SolutionName.zip" -conn $conn

$message = "Exporting Managed Solution for $global:SolutionName"
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.6
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

Export-CrmSolution -SolutionName $global:SolutionName -Managed -SolutionZipFileName $global:SolutionName"_managed.zip" -conn $conn

######################## EXTRACT SOLUTION

$ErrorActionPreference = "SilentlyContinue"
Remove-Item ..\..\package -Force -Recurse

$message = "Unpacking Solution $global:SolutionName"
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 0.8
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

if ($PatchSolution) {
    &.\Tools\SolutionPackager.exe /action:extract /folder:..\..\packagePatch /zipfile:"$global:SolutionName.zip" /packagetype:Both /allowDelete:Yes /c
}else{
    Remove-Item ..\..\package\patch -Force -Recurse
    &.\Tools\SolutionPackager.exe /action:extract /folder:..\..\packageSolution\ /zipfile:"$global:SolutionName.zip" /packagetype:Both /allowDelete:Yes /c
}

$message = "Cleaning Up..."
Write-Host $message
$ProgressBar = New-BTProgressBar -Status $message -Value 1
New-BurntToastNotification -Text $Text -ProgressBar $ProgressBar -Silent -UniqueIdentifier $UniqueId

Remove-Item nuget.exe
Remove-Item .\Tools -Force -Recurse -ErrorAction Ignore


