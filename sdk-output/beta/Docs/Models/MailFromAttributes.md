# MailFromAttributesBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **string** | The email identity | [optional] [default to undefined]
**mailFromDomain** | **string** | The name of a domain that an email identity uses as a custom MAIL FROM domain | [optional] [default to undefined]
**mxRecord** | **string** | MX record that is required in customer\&#39;s DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [optional] [default to undefined]
**txtRecord** | **string** | TXT record that is required in customer\&#39;s DNS in order to prove that Amazon SES is authorized to send email from your domain | [optional] [default to undefined]
**mailFromDomainStatus** | **string** | The current status of the MAIL FROM verification | [optional] [default to undefined]



## Enum: MailFromAttributesBetaMailFromDomainStatusBeta


* `Pending` (value: `'PENDING'`)

* `Success` (value: `'SUCCESS'`)

* `Failed` (value: `'FAILED'`)



