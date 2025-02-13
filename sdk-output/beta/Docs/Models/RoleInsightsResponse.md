# RoleInsightsResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Request Id for a role insight generation request | [optional] [default to undefined]
**createdDate** | **string** | The date-time role insights request was created. | [optional] [default to undefined]
**lastGenerated** | **string** | The date-time role insights request was completed. | [optional] [default to undefined]
**numberOfUpdates** | **number** | Total number of updates for this request. Starts with 0 and will have correct number when request is COMPLETED. | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** | The role IDs that are in this request. | [optional] [default to undefined]
**status** | **string** | Request status | [optional] [default to undefined]



## Enum: RoleInsightsResponseBetaStatusBeta


* `Created` (value: `'CREATED'`)

* `InProgress` (value: `'IN PROGRESS'`)

* `Completed` (value: `'COMPLETED'`)

* `Failed` (value: `'FAILED'`)



