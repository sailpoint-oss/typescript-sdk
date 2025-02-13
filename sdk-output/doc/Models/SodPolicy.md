# SodPolicyBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Policy ID. | [optional] [readonly] [default to undefined]
**name** | **string** | Policy business name. | [optional] [default to undefined]
**created** | **string** | The time when this SOD policy is created. | [optional] [readonly] [default to undefined]
**modified** | **string** | The time when this SOD policy is modified. | [optional] [readonly] [default to undefined]
**description** | **string** | Optional description of the SOD policy. | [optional] [default to undefined]
**ownerRef** | [**SodPolicyOwnerRefBeta**](SodPolicyOwnerRefBeta.md) |  | [optional] [default to undefined]
**externalPolicyReference** | **string** | Optional external policy reference. | [optional] [default to undefined]
**policyQuery** | **string** | Search query of the SOD policy. | [optional] [default to undefined]
**compensatingControls** | **string** | Optional compensating controls (Mitigating Controls). | [optional] [default to undefined]
**correctionAdvice** | **string** | Optional correction advice. | [optional] [default to undefined]
**state** | **string** | Whether the policy is enforced or not. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the policy object. | [optional] [default to undefined]
**creatorId** | **string** | Policy\&#39;s creator ID. | [optional] [readonly] [default to undefined]
**modifierId** | **string** | Policy\&#39;s modifier ID. | [optional] [readonly] [default to undefined]
**violationOwnerAssignmentConfig** | [**ViolationOwnerAssignmentConfigBeta**](ViolationOwnerAssignmentConfigBeta.md) |  | [optional] [default to undefined]
**scheduled** | **boolean** | Defines whether a policy has been scheduled or not. | [optional] [default to false]
**type** | **string** | Whether a policy is query based or conflicting access based. | [optional] [default to TypeBeta_General]
**conflictingAccessCriteria** | [**SodPolicyConflictingAccessCriteriaBeta**](SodPolicyConflictingAccessCriteriaBeta.md) |  | [optional] [default to undefined]



## Enum: SodPolicyBetaStateBeta


* `Enforced` (value: `'ENFORCED'`)

* `NotEnforced` (value: `'NOT_ENFORCED'`)





## Enum: SodPolicyBetaTypeBeta


* `General` (value: `'GENERAL'`)

* `ConflictingAccessBased` (value: `'CONFLICTING_ACCESS_BASED'`)



