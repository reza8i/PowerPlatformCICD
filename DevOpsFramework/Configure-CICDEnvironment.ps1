. (Join-Path $PSScriptRoot "_SetupTools.ps1")

$configFile = Get-Content (Join-Path $PSScriptRoot "\devopsConfig.json") | ConvertFrom-Json
$adoRepo = $configFile.gitRepo.Replace(' ', '')
$adoOrg = $configFile.ADOOrgName
$adoProject = $configFile.ADOProject

$message = "Connecting to Power Platform"

$title = "Common Data Service"
$option0 = New-Object System.Management.Automation.Host.ChoiceDescription '&Connect', 'connect'
$option1 = New-Object System.Management.Automation.Host.ChoiceDescription '&Quit', 'quit'
$options = [System.Management.Automation.Host.ChoiceDescription[]]($option0, $option1)
$prompt_result = $host.ui.PromptForChoice($title, $message, $options, -1)

if ($quit -eq 1) {
    exit
}

Install-XrmToolingPowerShell

$message = "Connecting to Deployment Staging (CI/CD)"
Write-Host $message

Write-Host ""
Write-Host "---- Please Select your Deployment Staging (CI/CD) Environment ------"
$connCICD = Get-CrmOrganizations -OnLineType OAuth
$choiceIndex = 0
$options = $connCICD | ForEach-Object { New-Object System.Management.Automation.Host.ChoiceDescription "&$($choiceIndex) - $($_.FriendlyName) ($($_.WebApplicationUrl))"; $choiceIndex++ }
do {
    $chosenIndex = $host.ui.PromptForChoice("Deployment Staging", "Select the Environment you wish to use", $options, -1)
    $CICDEnvironment = $connCICD[$chosenIndex]
} until ($CICDEnvironment -ne "")

if (!$Credentials) {
    Do {
        $Credentials = Get-Credential -Message "Enter the Credentials the Pipeline should use for Deploying to D365 / CDS"
    } Until (($Credentials.GetNetworkCredential().UserName -ne "") -and ($Credentials.GetNetworkCredential().Password -ne "")) 
}
if (!$username) {
    $username = $Credentials.GetNetworkCredential().UserName
    $password = $Credentials.GetNetworkCredential().Password
}

$message = "Creating variable groups in Azure DevOps"
Write-Host $message

try {
    $varGroupCICD = az pipelines variable-group create --organization https://dev.azure.com/$adoOrg --project $adoProject --name "$adoRepo.D365CDEnvironment"  --variables d365username=$username --authorize $true | ConvertFrom-Json
    az pipelines variable-group variable create --organization https://dev.azure.com/$adoOrg --project $adoProject --name d365password --value $password --secret $true --group-id $varGroupCICD.id
    az pipelines variable-group variable create --organization https://dev.azure.com/$adoOrg --project $adoProject --name d365url --value $CICDEnvironment.WebApplicationUrl --group-id $varGroupCICD.id

    $message = "Creating Build and Deploy Pipeline in Azure DevOps"
    Write-Host $message

    $pipeline = az pipelines create --name "$adoRepo.CI" --yml-path /build.yaml --repository $adoRepo --repository-type tfsgit --branch master | ConvertFrom-Json

    $configFile.CICDEnvironmentName = CICDEnvironment.FriendlyName
    $configFile.CICDEnvironmentURL = CICDEnvironment.WebApplicationUrl
    $configFile.CICDVarGroupID = $varGroupCICD.id
    $configFile.CIPipeLineId = $pipeline.definition.id
    $configFile | ConvertTo-Json | Set-Content (Join-Path $PSScriptRoot "\devopsConfig.json")    
    az pipelines show --id $pipeline.definition.id --open
}
catch {
    $configFile.CICDEnvironmentName = "Error"
    $configFile | ConvertTo-Json | Set-Content (Join-Path $PSScriptRoot "\devopsConfig.json")    
}

