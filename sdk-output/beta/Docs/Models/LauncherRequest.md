# LauncherRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the Launcher, limited to 255 characters | [default to undefined]
**description** | **string** | Description of the Launcher, limited to 2000 characters | [default to undefined]
**type** | **string** | Launcher type | [default to undefined]
**disabled** | **boolean** | State of the Launcher | [default to undefined]
**reference** | [**LauncherRequestReferenceBeta**](LauncherRequestReferenceBeta.md) |  | [optional] [default to undefined]
**config** | **string** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [default to undefined]



## Enum: LauncherRequestBetaTypeBeta


* `InteractiveProcess` (value: `'INTERACTIVE_PROCESS'`)



