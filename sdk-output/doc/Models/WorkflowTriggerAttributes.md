# WorkflowTriggerAttributesBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the trigger | [default to undefined]
**filter_$** | **string** | JSON path expression that will limit which events the trigger will fire on | [optional] [default to undefined]
**description** | **string** | Additional context about the external trigger | [optional] [default to undefined]
**name** | **string** | A unique name for the external trigger | [optional] [default to undefined]
**clientId** | **string** | OAuth Client ID to authenticate with this trigger | [optional] [default to undefined]
**url** | **string** | URL to invoke this workflow | [optional] [default to undefined]
**frequency** | **string** | Frequency of execution | [default to undefined]
**timeZone** | **string** | Time zone identifier | [optional] [default to undefined]
**cronString** | **string** |  | [optional] [default to undefined]
**weeklyDays** | **Array&lt;string&gt;** | Scheduled days of the week for execution | [optional] [default to undefined]
**weeklyTimes** | **Array&lt;string&gt;** | Scheduled execution times | [optional] [default to undefined]



## Enum: WorkflowTriggerAttributesBetaFrequencyBeta


* `Daily` (value: `'daily'`)

* `Weekly` (value: `'weekly'`)

* `Monthly` (value: `'monthly'`)

* `Yearly` (value: `'yearly'`)

* `CronSchedule` (value: `'cronSchedule'`)



