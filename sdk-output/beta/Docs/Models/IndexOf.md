# IndexOfBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**substring** | **string** | A substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

