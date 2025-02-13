# RoleCriteriaLevel2Beta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**RoleCriteriaOperationBeta**](RoleCriteriaOperationBeta.md) |  | [optional] [default to undefined]
**key** | [**RoleCriteriaKeyBeta**](RoleCriteriaKeyBeta.md) |  | [optional] [default to undefined]
**stringValue** | **string** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] [default to undefined]
**children** | [**Array&lt;RoleCriteriaLevel3Beta&gt;**](RoleCriteriaLevel3Beta.md) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] [default to undefined]

