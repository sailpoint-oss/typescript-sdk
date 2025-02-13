# ProductBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productName** | **string** | Name of the Product | [optional] [default to undefined]
**url** | **string** | URL of the Product | [optional] [default to undefined]
**productTenantId** | **string** | An identifier for a specific product-tenant combination | [optional] [default to undefined]
**productRegion** | **string** | Product region | [optional] [default to undefined]
**productRight** | **string** | Right needed for the Product | [optional] [default to undefined]
**apiUrl** | **string** | API URL of the Product | [optional] [default to undefined]
**licenses** | [**Array&lt;LicenseBeta&gt;**](LicenseBeta.md) |  | [optional] [default to undefined]
**attributes** | **{ [key: string]: any; }** | Additional attributes for a product | [optional] [default to undefined]
**zone** | **string** | Zone | [optional] [default to undefined]
**status** | **string** | Status of the product | [optional] [default to undefined]
**statusDateTime** | **string** | Status datetime | [optional] [default to undefined]
**reason** | **string** | If there\&#39;s a tenant provisioning failure then reason will have the description of error | [optional] [default to undefined]
**notes** | **string** | Product could have additional notes added during tenant provisioning. | [optional] [default to undefined]
**dateCreated** | **string** | Date when the product was created | [optional] [default to undefined]
**lastUpdated** | **string** | Date when the product was last updated | [optional] [default to undefined]
**orgType** | **string** | Type of org | [optional] [default to undefined]



## Enum: ProductBetaOrgTypeBeta


* `Development` (value: `'development'`)

* `Staging` (value: `'staging'`)

* `Production` (value: `'production'`)

* `Test` (value: `'test'`)

* `Partner` (value: `'partner'`)

* `Training` (value: `'training'`)

* `Demonstration` (value: `'demonstration'`)

* `Sandbox` (value: `'sandbox'`)



