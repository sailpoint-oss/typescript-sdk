# ConnectorRuleUpdateRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | the name of the rule | [default to undefined]
**description** | **string** | a description of the rule\&#39;s purpose | [optional] [default to undefined]
**type** | **string** | the type of rule | [default to undefined]
**signature** | [**ConnectorRuleCreateRequestSignatureBeta**](ConnectorRuleCreateRequestSignatureBeta.md) |  | [optional] [default to undefined]
**sourceCode** | [**SourceCodeBeta**](SourceCodeBeta.md) |  | [default to undefined]
**attributes** | **object** | a map of string to objects | [optional] [default to undefined]
**id** | **string** | the ID of the rule to update | [default to undefined]



## Enum: ConnectorRuleUpdateRequestBetaTypeBeta


* `BuildMap` (value: `'BuildMap'`)

* `ConnectorAfterCreate` (value: `'ConnectorAfterCreate'`)

* `ConnectorAfterDelete` (value: `'ConnectorAfterDelete'`)

* `ConnectorAfterModify` (value: `'ConnectorAfterModify'`)

* `ConnectorBeforeCreate` (value: `'ConnectorBeforeCreate'`)

* `ConnectorBeforeDelete` (value: `'ConnectorBeforeDelete'`)

* `ConnectorBeforeModify` (value: `'ConnectorBeforeModify'`)

* `JdbcBuildMap` (value: `'JDBCBuildMap'`)

* `JdbcOperationProvisioning` (value: `'JDBCOperationProvisioning'`)

* `JdbcProvision` (value: `'JDBCProvision'`)

* `PeopleSoftHrmsBuildMap` (value: `'PeopleSoftHRMSBuildMap'`)

* `PeopleSoftHrmsOperationProvisioning` (value: `'PeopleSoftHRMSOperationProvisioning'`)

* `PeopleSoftHrmsProvision` (value: `'PeopleSoftHRMSProvision'`)

* `RacfPermissionCustomization` (value: `'RACFPermissionCustomization'`)

* `SapBuildMap` (value: `'SAPBuildMap'`)

* `SapHrManagerRule` (value: `'SapHrManagerRule'`)

* `SapHrOperationProvisioning` (value: `'SapHrOperationProvisioning'`)

* `SapHrProvision` (value: `'SapHrProvision'`)

* `SuccessFactorsOperationProvisioning` (value: `'SuccessFactorsOperationProvisioning'`)

* `WebServiceAfterOperationRule` (value: `'WebServiceAfterOperationRule'`)

* `WebServiceBeforeOperationRule` (value: `'WebServiceBeforeOperationRule'`)



