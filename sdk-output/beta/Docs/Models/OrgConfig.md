# OrgConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgName** | **string** | The name of the org. | [optional] [default to undefined]
**timeZone** | **string** | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [optional] [default to undefined]
**lcsChangeHonorsSourceEnableFeature** | **boolean** | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [optional] [default to undefined]
**armCustomerId** | **string** | ARM Customer ID | [optional] [default to undefined]
**armSapSystemIdMappings** | **string** | A list of IDN::sourceId to ARM::systemId mappings. | [optional] [default to undefined]
**armAuth** | **string** | ARM authentication string | [optional] [default to undefined]
**armDb** | **string** | ARM database name | [optional] [default to undefined]
**armSsoUrl** | **string** | ARM SSO URL | [optional] [default to undefined]
**iaiEnableCertificationRecommendations** | **boolean** | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [optional] [default to undefined]
**sodReportConfigs** | [**Array&lt;ReportConfigDTOBeta&gt;**](ReportConfigDTOBeta.md) |  | [optional] [default to undefined]

