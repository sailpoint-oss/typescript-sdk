# DateCompareBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstDate** | [**DateCompareFirstDateBeta**](DateCompareFirstDateBeta.md) |  | [default to undefined]
**secondDate** | [**DateCompareSecondDateBeta**](DateCompareSecondDateBeta.md) |  | [default to undefined]
**operator** | **string** | This is the comparison to perform. | Operation | Description | | --------- | ------- | | LT        | Strictly less than: &#x60;firstDate &lt; secondDate&#x60; | | LTE       | Less than or equal to: &#x60;firstDate &lt;&#x3D; secondDate&#x60; | | GT        | Strictly greater than: &#x60;firstDate &gt; secondDate&#x60; | | GTE       | Greater than or equal to: &#x60;firstDate &gt;&#x3D; secondDate&#x60; |  | [default to undefined]
**positiveCondition** | **string** | The output of the transform if the expression evalutes to true | [default to undefined]
**negativeCondition** | **string** | The output of the transform if the expression evalutes to false | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]



## Enum: DateCompareBetaOperatorBeta


* `Lt` (value: `'LT'`)

* `Lte` (value: `'LTE'`)

* `Gt` (value: `'GT'`)

* `Gte` (value: `'GTE'`)



