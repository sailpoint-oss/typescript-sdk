# ReportConfigDTOBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnName** | **string** | Name of column in report | [optional] [default to undefined]
**required** | **boolean** | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column\&#39;s definition. | [optional] [default to false]
**included** | **boolean** | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included&#x3D;false if required&#x3D;&#x3D;true. | [optional] [default to false]
**order** | **number** | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [optional] [default to undefined]

