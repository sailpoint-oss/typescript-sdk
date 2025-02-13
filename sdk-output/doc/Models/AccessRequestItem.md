# AccessRequestItemBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the item being requested. | [default to undefined]
**id** | **string** | ID of Role, Access Profile or Entitlement being requested. | [default to undefined]
**comment** | **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] [default to undefined]
**removeDate** | **string** | The date the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date in the future. * The current SLA for the deprovisioning is 24 hours. * This date can be modified to either extend or decrease the duration of access item assignments for the specified identity. You can change the expiration date for requests for yourself or direct reports, but you cannot remove an expiration date on an already approved item. If the access request has not been approved, you can cancel it and submit a new one without the expiration. If it has already been approved, then you have to revoke the access and then re-request without the expiration.  | [optional] [default to undefined]



## Enum: AccessRequestItemBetaTypeBeta


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Role` (value: `'ROLE'`)

* `Entitlement` (value: `'ENTITLEMENT'`)



