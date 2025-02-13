# LauncherBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the Launcher | [default to undefined]
**created** | **string** | Date the Launcher was created | [default to undefined]
**modified** | **string** | Date the Launcher was last modified | [default to undefined]
**owner** | [**LauncherOwnerBeta**](LauncherOwnerBeta.md) |  | [default to undefined]
**name** | **string** | Name of the Launcher, limited to 255 characters | [default to undefined]
**description** | **string** | Description of the Launcher, limited to 2000 characters | [default to undefined]
**type** | **string** | Launcher type | [default to undefined]
**disabled** | **boolean** | State of the Launcher | [default to undefined]
**reference** | [**LauncherReferenceBeta**](LauncherReferenceBeta.md) |  | [optional] [default to undefined]
**config** | **string** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [default to undefined]



## Enum: LauncherBetaTypeBeta


* `InteractiveProcess` (value: `'INTERACTIVE_PROCESS'`)



