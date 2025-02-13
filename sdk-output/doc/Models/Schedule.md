# ScheduleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have \&#39;hours\&#39; set, but not \&#39;days\&#39;; a WEEKLY schedule can have both \&#39;hours\&#39; and \&#39;days\&#39; set. | [default to undefined]
**months** | [**ScheduleMonthsBeta**](ScheduleMonthsBeta.md) |  | [optional] [default to undefined]
**days** | [**ScheduleDaysBeta**](ScheduleDaysBeta.md) |  | [optional] [default to undefined]
**hours** | [**ScheduleHoursBeta**](ScheduleHoursBeta.md) |  | [default to undefined]
**expiration** | **string** | Specifies the time after which this schedule will no longer occur. | [optional] [default to undefined]
**timeZoneId** | **string** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \&quot;CST\&quot;, the schedule will run at 1AM CST. | [optional] [default to undefined]



## Enum: ScheduleBetaTypeBeta


* `Weekly` (value: `'WEEKLY'`)

* `Monthly` (value: `'MONTHLY'`)

* `Annually` (value: `'ANNUALLY'`)

* `Calendar` (value: `'CALENDAR'`)



