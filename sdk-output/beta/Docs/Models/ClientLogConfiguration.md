# ClientLogConfigurationBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **string** | Log configuration\&#39;s client ID | [optional] [default to undefined]
**durationMinutes** | **number** | Duration in minutes for log configuration to remain in effect before resetting to defaults | [default to undefined]
**expiration** | **string** | Expiration date-time of the log configuration request | [optional] [default to undefined]
**rootLevel** | [**StandardLevelBeta**](StandardLevelBeta.md) |  | [default to undefined]
**logLevels** | [**{ [key: string]: StandardLevelBeta; }**](StandardLevelBeta.md) | Mapping of identifiers to Standard Log Level values | [optional] [default to undefined]

