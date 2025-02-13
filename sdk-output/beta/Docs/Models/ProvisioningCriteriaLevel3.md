# ProvisioningCriteriaLevel3Beta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**ProvisioningCriteriaOperationBeta**](ProvisioningCriteriaOperationBeta.md) |  | [optional] [default to undefined]
**attribute** | **string** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] [default to undefined]
**value** | **string** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] [default to undefined]
**children** | **string** | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] [default to undefined]

