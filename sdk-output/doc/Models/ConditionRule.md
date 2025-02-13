# ConditionRuleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | **string** | Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key). INPUT ConditionRuleSourceTypeInput ELEMENT ConditionRuleSourceTypeElement | [optional] [default to undefined]
**source** | **string** | Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement, the source is the name of a technical key of an element to retrieve its value. | [optional] [default to undefined]
**operator** | **string** | ConditionRuleComparisonOperatorType value. EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality. NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality. CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value. NOT_CO ConditionRuleComparisonOperatorTypeNotContains IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values. NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes EM ConditionRuleComparisonOperatorTypeEmpty NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive. NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive. NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith | [optional] [default to undefined]
**valueType** | **string** | ConditionRuleValueType type. STRING ConditionRuleValueTypeString  This value is a static string. STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values. INPUT ConditionRuleValueTypeInput  This value is a reference to a form input. ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key). LIST ConditionRuleValueTypeList BOOLEAN ConditionRuleValueTypeBoolean | [optional] [default to undefined]
**value** | **string** | Based on the ValueType. | [optional] [default to undefined]



## Enum: ConditionRuleBetaSourceTypeBeta


* `Input` (value: `'INPUT'`)

* `Element` (value: `'ELEMENT'`)





## Enum: ConditionRuleBetaOperatorBeta


* `Eq` (value: `'EQ'`)

* `Ne` (value: `'NE'`)

* `Co` (value: `'CO'`)

* `NotCo` (value: `'NOT_CO'`)

* `In` (value: `'IN'`)

* `NotIn` (value: `'NOT_IN'`)

* `Em` (value: `'EM'`)

* `NotEm` (value: `'NOT_EM'`)

* `Sw` (value: `'SW'`)

* `NotSw` (value: `'NOT_SW'`)

* `Ew` (value: `'EW'`)

* `NotEw` (value: `'NOT_EW'`)





## Enum: ConditionRuleBetaValueTypeBeta


* `String` (value: `'STRING'`)

* `StringList` (value: `'STRING_LIST'`)

* `Input` (value: `'INPUT'`)

* `Element` (value: `'ELEMENT'`)

* `List` (value: `'LIST'`)

* `Boolean` (value: `'BOOLEAN'`)



