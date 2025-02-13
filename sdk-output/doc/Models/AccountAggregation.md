# AccountAggregationBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **string** | When the aggregation started. | [optional] [default to undefined]
**status** | **string** | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] [default to undefined]
**totalAccounts** | **number** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] [default to undefined]
**processedAccounts** | **number** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] [default to undefined]



## Enum: AccountAggregationBetaStatusBeta


* `Started` (value: `'STARTED'`)

* `AccountsCollected` (value: `'ACCOUNTS_COLLECTED'`)

* `Completed` (value: `'COMPLETED'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Retried` (value: `'RETRIED'`)

* `Terminated` (value: `'TERMINATED'`)



