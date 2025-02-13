# LookupBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **{ [key: string]: any; }** | This is a JSON object of key-value pairs. The key is the string that will attempt to be matched to the input, and the value is the output string that should be returned if the key is matched   &gt;**Note** the use of the optional default key value here; if none of the three countries in the above example match the input string, the transform will return \&quot;Unknown Region\&quot; for the attribute that is mapped to this transform.  | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to false]
**input** | **{ [key: string]: any; }** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] [default to undefined]

