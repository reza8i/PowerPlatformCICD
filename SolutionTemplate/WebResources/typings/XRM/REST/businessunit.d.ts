declare namespace Rest {
  interface BusinessUnitBase extends RestEntity {
    Address1_AddressId?: string | null;
    Address1_AddressTypeCode?: SDK.OptionSet<businessunit_address1_addresstypecode> | null;
    Address1_City?: string | null;
    Address1_Country?: string | null;
    Address1_County?: string | null;
    Address1_Fax?: string | null;
    Address1_Latitude?: number | null;
    Address1_Line1?: string | null;
    Address1_Line2?: string | null;
    Address1_Line3?: string | null;
    Address1_Longitude?: number | null;
    Address1_Name?: string | null;
    Address1_PostOfficeBox?: string | null;
    Address1_PostalCode?: string | null;
    Address1_ShippingMethodCode?: SDK.OptionSet<businessunit_address1_shippingmethodcode> | null;
    Address1_StateOrProvince?: string | null;
    Address1_Telephone1?: string | null;
    Address1_Telephone2?: string | null;
    Address1_Telephone3?: string | null;
    Address1_UPSZone?: string | null;
    Address1_UTCOffset?: number | null;
    Address2_AddressId?: string | null;
    Address2_AddressTypeCode?: SDK.OptionSet<businessunit_address2_addresstypecode> | null;
    Address2_City?: string | null;
    Address2_Country?: string | null;
    Address2_County?: string | null;
    Address2_Fax?: string | null;
    Address2_Latitude?: number | null;
    Address2_Line1?: string | null;
    Address2_Line2?: string | null;
    Address2_Line3?: string | null;
    Address2_Longitude?: number | null;
    Address2_Name?: string | null;
    Address2_PostOfficeBox?: string | null;
    Address2_PostalCode?: string | null;
    Address2_ShippingMethodCode?: SDK.OptionSet<businessunit_address2_shippingmethodcode> | null;
    Address2_StateOrProvince?: string | null;
    Address2_Telephone1?: string | null;
    Address2_Telephone2?: string | null;
    Address2_Telephone3?: string | null;
    Address2_UPSZone?: string | null;
    Address2_UTCOffset?: number | null;
    BusinessUnitId?: string | null;
    CalendarId?: SDK.EntityReference | null;
    CostCenter?: string | null;
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    CreditLimit?: number | null;
    Description?: string | null;
    DisabledReason?: string | null;
    DivisionName?: string | null;
    EMailAddress?: string | null;
    ExchangeRate?: string | null;
    FileAsName?: string | null;
    FtpSiteUrl?: string | null;
    ImportSequenceNumber?: number | null;
    InheritanceMask?: number | null;
    IsDisabled?: boolean | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    Name?: string | null;
    OrganizationId?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    ParentBusinessUnitId?: SDK.EntityReference | null;
    Picture?: string | null;
    StockExchange?: string | null;
    TickerSymbol?: string | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    UTCOffset?: number | null;
    UserGroupId?: string | null;
    VersionNumber?: number | null;
    WebSiteUrl?: string | null;
    WorkflowSuspended?: boolean | null;
  }
  interface BusinessUnit extends BusinessUnitBase {
    Referencedbusiness_unit_parent_business_unit?: BusinessUnit[] | null;
    Referencingbusiness_unit_parent_business_unit?: BusinessUnit | null;
    business_unit_connections?: Connection[] | null;
    business_unit_system_users?: SystemUser[] | null;
    business_unit_teams?: Team[] | null;
    lk_businessunit_createdonbehalfby?: SystemUser | null;
    lk_businessunit_modifiedonbehalfby?: SystemUser | null;
    lk_businessunitbase_createdby?: SystemUser | null;
    lk_businessunitbase_modifiedby?: SystemUser | null;
  }
  interface BusinessUnitResult extends BusinessUnitBase {
    Referencedbusiness_unit_parent_business_unit?: SDK.Results<BusinessUnitResult> | null;
    Referencingbusiness_unit_parent_business_unit?: BusinessUnit | null;
    business_unit_connections?: SDK.Results<ConnectionResult> | null;
    business_unit_system_users?: SDK.Results<SystemUserResult> | null;
    business_unit_teams?: SDK.Results<TeamResult> | null;
    lk_businessunit_createdonbehalfby?: SystemUser | null;
    lk_businessunit_modifiedonbehalfby?: SystemUser | null;
    lk_businessunitbase_createdby?: SystemUser | null;
    lk_businessunitbase_modifiedby?: SystemUser | null;
  }
  interface BusinessUnit_Select extends BusinessUnit_Expand {
    Address1_AddressId: RestAttribute<BusinessUnit_Select>;
    Address1_AddressTypeCode: RestAttribute<BusinessUnit_Select>;
    Address1_City: RestAttribute<BusinessUnit_Select>;
    Address1_Country: RestAttribute<BusinessUnit_Select>;
    Address1_County: RestAttribute<BusinessUnit_Select>;
    Address1_Fax: RestAttribute<BusinessUnit_Select>;
    Address1_Latitude: RestAttribute<BusinessUnit_Select>;
    Address1_Line1: RestAttribute<BusinessUnit_Select>;
    Address1_Line2: RestAttribute<BusinessUnit_Select>;
    Address1_Line3: RestAttribute<BusinessUnit_Select>;
    Address1_Longitude: RestAttribute<BusinessUnit_Select>;
    Address1_Name: RestAttribute<BusinessUnit_Select>;
    Address1_PostOfficeBox: RestAttribute<BusinessUnit_Select>;
    Address1_PostalCode: RestAttribute<BusinessUnit_Select>;
    Address1_ShippingMethodCode: RestAttribute<BusinessUnit_Select>;
    Address1_StateOrProvince: RestAttribute<BusinessUnit_Select>;
    Address1_Telephone1: RestAttribute<BusinessUnit_Select>;
    Address1_Telephone2: RestAttribute<BusinessUnit_Select>;
    Address1_Telephone3: RestAttribute<BusinessUnit_Select>;
    Address1_UPSZone: RestAttribute<BusinessUnit_Select>;
    Address1_UTCOffset: RestAttribute<BusinessUnit_Select>;
    Address2_AddressId: RestAttribute<BusinessUnit_Select>;
    Address2_AddressTypeCode: RestAttribute<BusinessUnit_Select>;
    Address2_City: RestAttribute<BusinessUnit_Select>;
    Address2_Country: RestAttribute<BusinessUnit_Select>;
    Address2_County: RestAttribute<BusinessUnit_Select>;
    Address2_Fax: RestAttribute<BusinessUnit_Select>;
    Address2_Latitude: RestAttribute<BusinessUnit_Select>;
    Address2_Line1: RestAttribute<BusinessUnit_Select>;
    Address2_Line2: RestAttribute<BusinessUnit_Select>;
    Address2_Line3: RestAttribute<BusinessUnit_Select>;
    Address2_Longitude: RestAttribute<BusinessUnit_Select>;
    Address2_Name: RestAttribute<BusinessUnit_Select>;
    Address2_PostOfficeBox: RestAttribute<BusinessUnit_Select>;
    Address2_PostalCode: RestAttribute<BusinessUnit_Select>;
    Address2_ShippingMethodCode: RestAttribute<BusinessUnit_Select>;
    Address2_StateOrProvince: RestAttribute<BusinessUnit_Select>;
    Address2_Telephone1: RestAttribute<BusinessUnit_Select>;
    Address2_Telephone2: RestAttribute<BusinessUnit_Select>;
    Address2_Telephone3: RestAttribute<BusinessUnit_Select>;
    Address2_UPSZone: RestAttribute<BusinessUnit_Select>;
    Address2_UTCOffset: RestAttribute<BusinessUnit_Select>;
    BusinessUnitId: RestAttribute<BusinessUnit_Select>;
    CalendarId: RestAttribute<BusinessUnit_Select>;
    CostCenter: RestAttribute<BusinessUnit_Select>;
    CreatedBy: RestAttribute<BusinessUnit_Select>;
    CreatedOn: RestAttribute<BusinessUnit_Select>;
    CreatedOnBehalfBy: RestAttribute<BusinessUnit_Select>;
    CreditLimit: RestAttribute<BusinessUnit_Select>;
    Description: RestAttribute<BusinessUnit_Select>;
    DisabledReason: RestAttribute<BusinessUnit_Select>;
    DivisionName: RestAttribute<BusinessUnit_Select>;
    EMailAddress: RestAttribute<BusinessUnit_Select>;
    ExchangeRate: RestAttribute<BusinessUnit_Select>;
    FileAsName: RestAttribute<BusinessUnit_Select>;
    FtpSiteUrl: RestAttribute<BusinessUnit_Select>;
    ImportSequenceNumber: RestAttribute<BusinessUnit_Select>;
    InheritanceMask: RestAttribute<BusinessUnit_Select>;
    IsDisabled: RestAttribute<BusinessUnit_Select>;
    ModifiedBy: RestAttribute<BusinessUnit_Select>;
    ModifiedOn: RestAttribute<BusinessUnit_Select>;
    ModifiedOnBehalfBy: RestAttribute<BusinessUnit_Select>;
    Name: RestAttribute<BusinessUnit_Select>;
    OrganizationId: RestAttribute<BusinessUnit_Select>;
    OverriddenCreatedOn: RestAttribute<BusinessUnit_Select>;
    ParentBusinessUnitId: RestAttribute<BusinessUnit_Select>;
    Picture: RestAttribute<BusinessUnit_Select>;
    StockExchange: RestAttribute<BusinessUnit_Select>;
    TickerSymbol: RestAttribute<BusinessUnit_Select>;
    TransactionCurrencyId: RestAttribute<BusinessUnit_Select>;
    UTCOffset: RestAttribute<BusinessUnit_Select>;
    UserGroupId: RestAttribute<BusinessUnit_Select>;
    VersionNumber: RestAttribute<BusinessUnit_Select>;
    WebSiteUrl: RestAttribute<BusinessUnit_Select>;
    WorkflowSuspended: RestAttribute<BusinessUnit_Select>;
  }
  interface BusinessUnit_Filter {
    Address1_AddressId: XQR.Guid;
    Address1_AddressTypeCode: XQR.ValueContainerFilter<businessunit_address1_addresstypecode>;
    Address1_City: string;
    Address1_Country: string;
    Address1_County: string;
    Address1_Fax: string;
    Address1_Latitude: number;
    Address1_Line1: string;
    Address1_Line2: string;
    Address1_Line3: string;
    Address1_Longitude: number;
    Address1_Name: string;
    Address1_PostOfficeBox: string;
    Address1_PostalCode: string;
    Address1_ShippingMethodCode: XQR.ValueContainerFilter<businessunit_address1_shippingmethodcode>;
    Address1_StateOrProvince: string;
    Address1_Telephone1: string;
    Address1_Telephone2: string;
    Address1_Telephone3: string;
    Address1_UPSZone: string;
    Address1_UTCOffset: number;
    Address2_AddressId: XQR.Guid;
    Address2_AddressTypeCode: XQR.ValueContainerFilter<businessunit_address2_addresstypecode>;
    Address2_City: string;
    Address2_Country: string;
    Address2_County: string;
    Address2_Fax: string;
    Address2_Latitude: number;
    Address2_Line1: string;
    Address2_Line2: string;
    Address2_Line3: string;
    Address2_Longitude: number;
    Address2_Name: string;
    Address2_PostOfficeBox: string;
    Address2_PostalCode: string;
    Address2_ShippingMethodCode: XQR.ValueContainerFilter<businessunit_address2_shippingmethodcode>;
    Address2_StateOrProvince: string;
    Address2_Telephone1: string;
    Address2_Telephone2: string;
    Address2_Telephone3: string;
    Address2_UPSZone: string;
    Address2_UTCOffset: number;
    BusinessUnitId: XQR.Guid;
    CalendarId: XQR.EntityReferenceFilter;
    CostCenter: string;
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    CreditLimit: number;
    Description: string;
    DisabledReason: string;
    DivisionName: string;
    EMailAddress: string;
    ExchangeRate: any;
    FileAsName: string;
    FtpSiteUrl: string;
    ImportSequenceNumber: number;
    InheritanceMask: number;
    IsDisabled: boolean;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    Name: string;
    OrganizationId: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    ParentBusinessUnitId: XQR.EntityReferenceFilter;
    Picture: string;
    StockExchange: string;
    TickerSymbol: string;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    UTCOffset: number;
    UserGroupId: XQR.Guid;
    VersionNumber: number;
    WebSiteUrl: string;
    WorkflowSuspended: boolean;
  }
  interface BusinessUnit_Expand {
    Referencedbusiness_unit_parent_business_unit: RestExpand<BusinessUnit_Select, BusinessUnit_Select>;
    Referencingbusiness_unit_parent_business_unit: RestExpand<BusinessUnit_Select, BusinessUnit_Select>;
    business_unit_connections: RestExpand<BusinessUnit_Select, Connection_Select>;
    business_unit_system_users: RestExpand<BusinessUnit_Select, SystemUser_Select>;
    business_unit_teams: RestExpand<BusinessUnit_Select, Team_Select>;
    lk_businessunit_createdonbehalfby: RestExpand<BusinessUnit_Select, SystemUser_Select>;
    lk_businessunit_modifiedonbehalfby: RestExpand<BusinessUnit_Select, SystemUser_Select>;
    lk_businessunitbase_createdby: RestExpand<BusinessUnit_Select, SystemUser_Select>;
    lk_businessunitbase_modifiedby: RestExpand<BusinessUnit_Select, SystemUser_Select>;
  }
}
interface RestEntities {
  BusinessUnit: RestMapping<Rest.BusinessUnit,Rest.BusinessUnit_Select,Rest.BusinessUnit_Expand,Rest.BusinessUnit_Filter,Rest.BusinessUnitResult>;
}
