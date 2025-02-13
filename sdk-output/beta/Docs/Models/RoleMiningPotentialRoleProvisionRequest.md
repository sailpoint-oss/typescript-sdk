# RoleMiningPotentialRoleProvisionRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleName** | **string** | Name of the new role being created | [optional] [default to undefined]
**roleDescription** | **string** | Short description of the new role being created | [optional] [default to undefined]
**ownerId** | **string** | ID of the identity that will own this role | [optional] [default to undefined]
**includeIdentities** | **boolean** | When true, create access requests for the identities associated with the potential role | [optional] [default to false]
**directlyAssignedEntitlements** | **boolean** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to false]

