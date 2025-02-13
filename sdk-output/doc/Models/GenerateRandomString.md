# GenerateRandomStringBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | This must always be set to \&quot;Cloud Services Deployment Utility\&quot; | [default to undefined]
**operation** | **string** | The operation to perform &#x60;generateRandomString&#x60; | [default to undefined]
**includeNumbers** | **boolean** | This must be either \&quot;true\&quot; or \&quot;false\&quot; to indicate whether the generator logic should include numbers | [default to undefined]
**includeSpecialChars** | **boolean** | This must be either \&quot;true\&quot; or \&quot;false\&quot; to indicate whether the generator logic should include special characters | [default to undefined]
**length** | **string** | This specifies how long the randomly generated string needs to be   &gt;NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to undefined]

