# ManualWorkItemDetailsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**originalOwner** | [**ManualWorkItemDetailsOriginalOwnerBeta**](ManualWorkItemDetailsOriginalOwnerBeta.md) |  | [optional] [default to undefined]
**currentOwner** | [**ManualWorkItemDetailsCurrentOwnerBeta**](ManualWorkItemDetailsCurrentOwnerBeta.md) |  | [optional] [default to undefined]
**modified** | **string** | Time at which item was modified. | [optional] [default to undefined]
**status** | [**ManualWorkItemStateBeta**](ManualWorkItemStateBeta.md) |  | [optional] [default to undefined]
**forwardHistory** | [**Array&lt;ApprovalForwardHistoryBeta&gt;**](ApprovalForwardHistoryBeta.md) | The history of approval forward action. | [optional] [default to undefined]

