# ConditionalBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **string** | A comparison statement that follows the structure of &#x60;ValueA eq ValueB&#x60; where &#x60;ValueA&#x60; and &#x60;ValueB&#x60; are static strings or outputs of other transforms.   The &#x60;eq&#x60; operator is the only valid comparison | [default to undefined]
**positiveCondition** | **string** | The output of the transform if the expression evalutes to true | [default to undefined]
**negativeCondition** | **string** | The output of the transform if the expression evalutes to false | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

