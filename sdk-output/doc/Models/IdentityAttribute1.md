# IdentityAttribute1Beta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The system (camel-cased) name of the identity attribute to bring in | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

