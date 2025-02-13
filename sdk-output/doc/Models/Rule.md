# RuleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | This must always be set to \&quot;Cloud Services Deployment Utility\&quot; | [default to undefined]
**requiresPeriodicRefresh** | **boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to undefined]
**operation** | **string** | The operation to perform &#x60;getReferenceIdentityAttribute&#x60; | [default to undefined]
**includeNumbers** | **boolean** | This must be either \&quot;true\&quot; or \&quot;false\&quot; to indicate whether the generator logic should include numbers | [default to undefined]
**includeSpecialChars** | **boolean** | This must be either \&quot;true\&quot; or \&quot;false\&quot; to indicate whether the generator logic should include special characters | [default to undefined]
**length** | **string** | This specifies how long the randomly generated string needs to be   &gt;NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters  | [default to undefined]
**uid** | **string** | This is the SailPoint User Name (uid) value of the identity whose attribute is desired  As a convenience feature, you can use the &#x60;manager&#x60; keyword to dynamically look up the user\&#39;s manager and then get that manager\&#39;s identity attribute.  | [default to undefined]

