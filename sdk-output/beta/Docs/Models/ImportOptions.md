# ImportOptionsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **Array&lt;string&gt;** | Object type names to be excluded from an sp-config export command. | [optional] [default to undefined]
**includeTypes** | **Array&lt;string&gt;** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] [default to undefined]
**objectOptions** | [**{ [key: string]: ObjectExportImportOptionsBeta; }**](ObjectExportImportOptionsBeta.md) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] [default to undefined]
**defaultReferences** | **Array&lt;string&gt;** | List of object types that can be used to resolve references on import. | [optional] [default to undefined]
**excludeBackup** | **boolean** | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [optional] [default to false]



## Enum: Array&lt;ImportOptionsBetaExcludeTypesBeta&gt;


* `IdentityObjectConfig` (value: `'IDENTITY_OBJECT_CONFIG'`)

* `IdentityProfile` (value: `'IDENTITY_PROFILE'`)

* `Rule` (value: `'RULE'`)

* `Source` (value: `'SOURCE'`)

* `Transform` (value: `'TRANSFORM'`)

* `TriggerSubscription` (value: `'TRIGGER_SUBSCRIPTION'`)





## Enum: Array&lt;ImportOptionsBetaIncludeTypesBeta&gt;


* `IdentityObjectConfig` (value: `'IDENTITY_OBJECT_CONFIG'`)

* `IdentityProfile` (value: `'IDENTITY_PROFILE'`)

* `Rule` (value: `'RULE'`)

* `Source` (value: `'SOURCE'`)

* `Transform` (value: `'TRANSFORM'`)

* `TriggerSubscription` (value: `'TRIGGER_SUBSCRIPTION'`)





## Enum: Array&lt;ImportOptionsBetaDefaultReferencesBeta&gt;


* `IdentityObjectConfig` (value: `'IDENTITY_OBJECT_CONFIG'`)

* `IdentityProfile` (value: `'IDENTITY_PROFILE'`)

* `Rule` (value: `'RULE'`)

* `Source` (value: `'SOURCE'`)

* `Transform` (value: `'TRANSFORM'`)

* `TriggerSubscription` (value: `'TRIGGER_SUBSCRIPTION'`)



