# DateMathBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **string** | A string value of the date and time components to operation on, along with the math operations to execute.  | [default to undefined]
**roundUp** | **boolean** | A boolean value to indicate whether the transform should round up or down when a rounding &#x60;/&#x60; operation is defined in the expression.    If not provided, the transform will default to &#x60;false&#x60;   &#x60;true&#x60; indicates the transform should round up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)   &#x60;false&#x60; indicates the transform should round down (i.e., truncate the fractional date/time component indicated)  | [optional] [default to false]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

