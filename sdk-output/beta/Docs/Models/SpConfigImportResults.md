# SpConfigImportResultsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**{ [key: string]: ObjectImportResultBeta; }**](ObjectImportResultBeta.md) | The results of an object configuration import job. | [default to undefined]
**exportJobId** | **string** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] [default to undefined]

