# CertificationTaskBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the certification task. | [optional] [default to undefined]
**type** | **string** | The type of the certification task. More values may be added in the future. | [optional] [default to undefined]
**targetType** | **string** | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] [default to undefined]
**targetId** | **string** | The ID of the item being operated on by this task. | [optional] [default to undefined]
**status** | **string** | The status of the task. | [optional] [default to undefined]
**errors** | [**Array&lt;ErrorMessageDtoBeta&gt;**](ErrorMessageDtoBeta.md) |  | [optional] [default to undefined]
**created** | **string** | The date and time on which this task was created. | [optional] [default to undefined]



## Enum: CertificationTaskBetaTypeBeta


* `Reassign` (value: `'REASSIGN'`)

* `AdminReassign` (value: `'ADMIN_REASSIGN'`)

* `CompleteCertification` (value: `'COMPLETE_CERTIFICATION'`)

* `FinishCertification` (value: `'FINISH_CERTIFICATION'`)

* `CompleteCampaign` (value: `'COMPLETE_CAMPAIGN'`)

* `ActivateCampaign` (value: `'ACTIVATE_CAMPAIGN'`)

* `CampaignCreate` (value: `'CAMPAIGN_CREATE'`)

* `CampaignDelete` (value: `'CAMPAIGN_DELETE'`)





## Enum: CertificationTaskBetaTargetTypeBeta


* `Certification` (value: `'CERTIFICATION'`)

* `Campaign` (value: `'CAMPAIGN'`)





## Enum: CertificationTaskBetaStatusBeta


* `Queued` (value: `'QUEUED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Success` (value: `'SUCCESS'`)

* `Error` (value: `'ERROR'`)



