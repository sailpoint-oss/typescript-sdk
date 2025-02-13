# ReplaceAllBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **{ [key: string]: any; }** | An attribute of key-value pairs. Each pair identifies the pattern to search for as its key, and the replacement string as its value. | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

