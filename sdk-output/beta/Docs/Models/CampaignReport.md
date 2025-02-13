# CampaignReportBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | SOD policy violation report result DTO type. | [optional] [default to undefined]
**id** | **string** | SOD policy violation report result ID. | [optional] [default to undefined]
**name** | **string** | Human-readable name of the SOD policy violation report result. | [optional] [default to undefined]
**status** | **string** | Status of a SOD policy violation report. | [optional] [default to undefined]
**reportType** | [**ReportTypeBeta**](ReportTypeBeta.md) |  | [default to undefined]
**lastRunAt** | **string** | The most recent date and time this report was run | [optional] [readonly] [default to undefined]



## Enum: CampaignReportBetaTypeBeta


* `ReportResult` (value: `'REPORT_RESULT'`)





## Enum: CampaignReportBetaStatusBeta


* `Success` (value: `'SUCCESS'`)

* `Warning` (value: `'WARNING'`)

* `Error` (value: `'ERROR'`)

* `Terminated` (value: `'TERMINATED'`)

* `TempError` (value: `'TEMP_ERROR'`)

* `Pending` (value: `'PENDING'`)



