# CustomPasswordInstructionBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **string** | The page ID that represents the page for forget user name, reset password and unlock account flow. | [optional] [default to undefined]
**pageContent** | **string** | The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks. If the customization text includes a link, like &#x60;&lt;A HREF&#x3D;\\\&quot;URL\\\&quot;&gt;...&lt;/A&gt;&#x60; clicking on this will open the link on the current browser page. If you want your link to be redirected to a different page, please redirect it to \&quot;_blank\&quot; like this: &#x60;&lt;a href&#x3D;\\\&quot;URL\&quot; target&#x3D;\\\&quot;_blank\\\&quot; &gt;link&lt;/a&gt;&#x60;. This will open a new tab when the link is clicked. Notice we\&#39;re only supporting _blank as the redirection target.  | [optional] [default to undefined]
**locale** | **string** | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] [default to undefined]



## Enum: CustomPasswordInstructionBetaPageIdBeta


* `ChangePasswordEnterPassword` (value: `'change-password:enter-password'`)

* `ChangePasswordFinish` (value: `'change-password:finish'`)

* `FlowSelectionSelect` (value: `'flow-selection:select'`)

* `ForgetUsernameUserEmail` (value: `'forget-username:user-email'`)

* `MfaEnterCode` (value: `'mfa:enter-code'`)

* `MfaEnterKba` (value: `'mfa:enter-kba'`)

* `MfaSelect` (value: `'mfa:select'`)

* `ResetPasswordEnterPassword` (value: `'reset-password:enter-password'`)

* `ResetPasswordEnterUsername` (value: `'reset-password:enter-username'`)

* `ResetPasswordFinish` (value: `'reset-password:finish'`)

* `UnlockAccountEnterUsername` (value: `'unlock-account:enter-username'`)

* `UnlockAccountFinish` (value: `'unlock-account:finish'`)



