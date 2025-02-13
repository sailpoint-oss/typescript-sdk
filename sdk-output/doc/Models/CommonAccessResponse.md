# CommonAccessResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique ID of the common access item | [optional] [default to undefined]
**access** | [**CommonAccessItemAccessBeta**](CommonAccessItemAccessBeta.md) |  | [optional] [default to undefined]
**status** | **string** | CONFIRMED or DENIED | [optional] [default to undefined]
**commonAccessType** | **string** |  | [optional] [default to undefined]
**lastUpdated** | **string** |  | [optional] [readonly] [default to undefined]
**reviewedByUser** | **boolean** | true if user has confirmed or denied status | [optional] [default to undefined]
**lastReviewed** | **string** |  | [optional] [readonly] [default to undefined]
**createdByUser** | **boolean** |  | [optional] [default to false]

