# ErrorResponseDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **string** | Fine-grained error code providing more detail of the error. | [optional] [default to undefined]
**trackingId** | **string** | Unique tracking id for the error. | [optional] [default to undefined]
**messages** | [**Array&lt;ErrorMessageDtoBeta&gt;**](ErrorMessageDtoBeta.md) | Generic localized reason for error | [optional] [default to undefined]
**causes** | [**Array&lt;ErrorMessageDtoBeta&gt;**](ErrorMessageDtoBeta.md) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] [default to undefined]

