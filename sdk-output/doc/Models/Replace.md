# ReplaceBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | **string** | This can be a string or a regex pattern in which you want to replace. | [default to undefined]
**replacement** | **string** | This is the replacement string that should be substituded wherever the string or pattern is found. | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

