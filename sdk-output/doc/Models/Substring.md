# SubstringBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **number** | The index of the first character to include in the returned substring.   If &#x60;begin&#x60; is set to -1, the transform will begin at character 0 of the input data  | [default to undefined]
**beginOffset** | **number** | This integer value is the number of characters to add to the begin attribute when returning a substring.   This attribute is only used if begin is not -1.  | [optional] [default to undefined]
**end** | **number** | The index of the first character to exclude from the returned substring.  If end is -1 or not provided at all, the substring transform will return everything up to the end of the input string.  | [optional] [default to undefined]
**endOffset** | **number** | This integer value is the number of characters to add to the end attribute when returning a substring.   This attribute is only used if end is provided and is not -1.  | [optional] [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

