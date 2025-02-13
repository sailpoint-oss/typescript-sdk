---
title: CustomFormsBetaApi
pagination_label: CustomFormsBetaApi
sidebar_label: CustomFormsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'CustomFormsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'CustomFormsBetaApi']
---

# CustomFormsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFormDefinition**](CustomFormsBetaApi.md#createFormDefinition) | **POST** /form-definitions | Creates a form definition.
[**createFormDefinitionByTemplate**](CustomFormsBetaApi.md#createFormDefinitionByTemplate) | **POST** /form-definitions/template | Create a form definition by template.
[**createFormDefinitionDynamicSchema**](CustomFormsBetaApi.md#createFormDefinitionDynamicSchema) | **POST** /form-definitions/forms-action-dynamic-schema | Generate JSON Schema dynamically.
[**createFormDefinitionFileRequest**](CustomFormsBetaApi.md#createFormDefinitionFileRequest) | **POST** /form-definitions/{formDefinitionID}/upload | Upload new form definition file.
[**createFormInstance**](CustomFormsBetaApi.md#createFormInstance) | **POST** /form-instances | Creates a form instance.
[**deleteFormDefinition**](CustomFormsBetaApi.md#deleteFormDefinition) | **DELETE** /form-definitions/{formDefinitionID} | Deletes a form definition.
[**exportFormDefinitionsByTenant**](CustomFormsBetaApi.md#exportFormDefinitionsByTenant) | **GET** /form-definitions/export | List form definitions by tenant.
[**getFileFromS3**](CustomFormsBetaApi.md#getFileFromS3) | **GET** /form-definitions/{formDefinitionID}/file/{fileID} | Download definition file by fileId.
[**getFormDefinitionByKey**](CustomFormsBetaApi.md#getFormDefinitionByKey) | **GET** /form-definitions/{formDefinitionID} | Return a form definition.
[**getFormInstanceByKey**](CustomFormsBetaApi.md#getFormInstanceByKey) | **GET** /form-instances/{formInstanceID} | Returns a form instance.
[**getFormInstanceFile**](CustomFormsBetaApi.md#getFormInstanceFile) | **GET** /form-instances/{formInstanceID}/file/{fileID} | Download instance file by fileId.
[**importFormDefinitions**](CustomFormsBetaApi.md#importFormDefinitions) | **POST** /form-definitions/import | Import form definitions from export.
[**patchFormDefinition**](CustomFormsBetaApi.md#patchFormDefinition) | **PATCH** /form-definitions/{formDefinitionID} | Patch a form definition.
[**patchFormInstance**](CustomFormsBetaApi.md#patchFormInstance) | **PATCH** /form-instances/{formInstanceID} | Patch a form instance.
[**searchFormDefinitionsByTenant**](CustomFormsBetaApi.md#searchFormDefinitionsByTenant) | **GET** /form-definitions | Export form definitions by tenant.
[**searchFormElementDataByElementID**](CustomFormsBetaApi.md#searchFormElementDataByElementID) | **GET** /form-instances/{formInstanceID}/data-source/{formElementID} | Retrieves dynamic data by element.
[**searchFormInstancesByTenant**](CustomFormsBetaApi.md#searchFormInstancesByTenant) | **GET** /form-instances | List form instances by tenant.
[**searchPreDefinedSelectOptions**](CustomFormsBetaApi.md#searchPreDefinedSelectOptions) | **GET** /form-definitions/predefined-select-options | List predefined select options.
[**showPreviewDataSource**](CustomFormsBetaApi.md#showPreviewDataSource) | **POST** /form-definitions/{formDefinitionID}/data-source | Preview form definition data source.



## createFormDefinition

> FormDefinitionResponseBeta createFormDefinition(createFormDefinitionRequestBeta)

Creates a form definition.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFormDefinitionRequestBeta** | [**CreateFormDefinitionRequestBeta**](../Models/CreateFormDefinitionRequestBeta.md)| Body is the request payload to create form definition request | [optional] 

### Return type

[**FormDefinitionResponseBeta**](../Models/FormDefinitionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Grant Smith",
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  },
  "formInput" : [ {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  }, {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  } ],
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "created" : "2023-07-12T20:14:57.74486Z",
  "name" : "My form",
  "description" : "My form description",
  "modified" : "2023-07-12T20:14:57.74486Z",
  "id" : "00000000-0000-0000-0000-000000000000",
  "usedBy" : [ {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  }, {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  } ],
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const createFormDefinitionRequestBeta : CreateFormDefinitionRequestBeta = 

try {
    const val = await customFormsBetaApi.createFormDefinition();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.createFormDefinition(createFormDefinitionRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createFormDefinitionByTemplate

> FormDefinitionResponseBeta createFormDefinitionByTemplate(createFormDefinitionRequestBeta)

Create a form definition by template.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFormDefinitionRequestBeta** | [**CreateFormDefinitionRequestBeta**](../Models/CreateFormDefinitionRequestBeta.md)| Body is the request payload to create form definition request | [optional] 

### Return type

[**FormDefinitionResponseBeta**](../Models/FormDefinitionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Grant Smith",
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  },
  "formInput" : [ {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  }, {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  } ],
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "created" : "2023-07-12T20:14:57.74486Z",
  "name" : "My form",
  "description" : "My form description",
  "modified" : "2023-07-12T20:14:57.74486Z",
  "id" : "00000000-0000-0000-0000-000000000000",
  "usedBy" : [ {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  }, {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  } ],
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const createFormDefinitionRequestBeta : CreateFormDefinitionRequestBeta = 

try {
    const val = await customFormsBetaApi.createFormDefinitionByTemplate();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.createFormDefinitionByTemplate(createFormDefinitionRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createFormDefinitionDynamicSchema

> FormDefinitionDynamicSchemaResponseBeta createFormDefinitionDynamicSchema(body)

Generate JSON Schema dynamically.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FormDefinitionDynamicSchemaRequestBeta**](../Models/FormDefinitionDynamicSchemaRequestBeta.md)| Body is the request payload to create a form definition dynamic schema | [optional] 

### Return type

[**FormDefinitionDynamicSchemaResponseBeta**](../Models/FormDefinitionDynamicSchemaResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "outputSchema" : {
    "outputSchema" : {
      "$schema" : "https://json-schema.org/draft/2020-12/schema",
      "additionalProperties" : false,
      "properties" : {
        "firstName" : {
          "title" : "First Name",
          "type" : "string"
        },
        "fullName" : {
          "title" : "Full Name",
          "type" : "string"
        },
        "lastName" : {
          "title" : "Last Name",
          "type" : "string"
        },
        "startDate" : {
          "format" : "date-time",
          "title" : "Start Date",
          "type" : "string"
        }
      },
      "type" : "object"
    }
  }
}


const body : FormDefinitionDynamicSchemaRequestBeta = 

try {
    const val = await customFormsBetaApi.createFormDefinitionDynamicSchema();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.createFormDefinitionDynamicSchema(body);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createFormDefinitionFileRequest

> FormDefinitionFileUploadResponseBeta createFormDefinitionFileRequest(formDefinitionID, file)

Upload new form definition file.

Parameter `{formDefinitionID}` should match a form definition ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| FormDefinitionID  String specifying FormDefinitionID | [default to undefined]
 **file** | **File**| File specifying the multipart | [default to undefined]

### Return type

[**FormDefinitionFileUploadResponseBeta**](../Models/FormDefinitionFileUploadResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "created" : "2023-07-12T20:14:57.74486Z",
  "formDefinitionId" : "00000000-0000-0000-0000-000000000000",
  "fileId" : "01FHZXHK8PTP9FVK99Z66GXQTX.png"
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // FormDefinitionID  String specifying FormDefinitionID (default to undefined)
const file : File = BINARY_DATA_HERE; // File specifying the multipart (default to undefined)

try {
    const val = await customFormsBetaApi.createFormDefinitionFileRequest(formDefinitionID, file);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.createFormDefinitionFileRequest(formDefinitionID, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createFormInstance

> FormInstanceResponseBeta createFormInstance(body)

Creates a form instance.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFormInstanceRequestBeta**](../Models/CreateFormInstanceRequestBeta.md)| Body is the request payload to create a form instance | [optional] 

### Return type

[**FormInstanceResponseBeta**](../Models/FormInstanceResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "formInput" : {
    "input1" : "Sales"
  },
  "created" : "2023-07-12T20:14:57.74486Z",
  "standAloneFormUrl" : "https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000",
  "standAloneForm" : false,
  "createdBy" : {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "WORKFLOW_EXECUTION"
  },
  "recipients" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  } ],
  "expire" : "2023-08-12T20:14:57.74486Z",
  "formDefinitionId" : "49841cb8-00a5-4fbd-9888-8bbb28d48331",
  "formErrors" : [ {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  }, {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  } ],
  "modified" : "2023-07-12T20:14:57.74486Z",
  "formData" : {
    "department" : "Engineering"
  },
  "id" : "06a2d961-07fa-44d1-8d0a-2f6470e30fd2",
  "state" : "ASSIGNED",
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const body : CreateFormInstanceRequestBeta = 

try {
    const val = await customFormsBetaApi.createFormInstance();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.createFormInstance(body);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteFormDefinition

> object deleteFormDefinition(formDefinitionID)

Deletes a form definition.

Parameter `{formDefinitionID}` should match a form definition ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| Form definition ID | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  } ],
  "detailCode" : "detailCode",
  "statusCode" : 0,
  "trackingId" : "trackingId"
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // Form definition ID (default to undefined)

try {
    const val = await customFormsBetaApi.deleteFormDefinition(formDefinitionID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.deleteFormDefinition(formDefinitionID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## exportFormDefinitionsByTenant

> Array&lt;ExportFormDefinitionsByTenant200ResponseInnerBeta&gt; exportFormDefinitionsByTenant(offset, limit, filters, sorters)

List form definitions by tenant.

No parameters required.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
 **limit** | **number**| Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [optional] [default to &#39;name&#39;]

### Return type

[**Array&lt;ExportFormDefinitionsByTenant200ResponseInnerBeta&gt;**](../Models/ExportFormDefinitionsByTenant200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

[ {
  "self" : {
    "name" : "Temporary User Level Permissions - Requester",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "FORM_DEFINITION"
  },
  "version" : 0,
  "object" : {
    "owner" : {
      "name" : "Grant Smith",
      "id" : "2c9180867624cbd7017642d8c8c81f67",
      "type" : "IDENTITY"
    },
    "formInput" : [ {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    }, {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    } ],
    "formConditions" : [ {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    }, {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    } ],
    "created" : "2023-07-12T20:14:57.74486Z",
    "name" : "My form",
    "description" : "My form description",
    "modified" : "2023-07-12T20:14:57.74486Z",
    "id" : "00000000-0000-0000-0000-000000000000",
    "usedBy" : [ {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    }, {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    } ],
    "formElements" : [ {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    }, {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    } ]
  }
}, {
  "self" : {
    "name" : "Temporary User Level Permissions - Requester",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "FORM_DEFINITION"
  },
  "version" : 0,
  "object" : {
    "owner" : {
      "name" : "Grant Smith",
      "id" : "2c9180867624cbd7017642d8c8c81f67",
      "type" : "IDENTITY"
    },
    "formInput" : [ {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    }, {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    } ],
    "formConditions" : [ {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    }, {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    } ],
    "created" : "2023-07-12T20:14:57.74486Z",
    "name" : "My form",
    "description" : "My form description",
    "modified" : "2023-07-12T20:14:57.74486Z",
    "id" : "00000000-0000-0000-0000-000000000000",
    "usedBy" : [ {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    }, {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    } ],
    "formElements" : [ {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    }, {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    } ]
  }
} ]


const offset : number = 0; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
const limit : number = 250; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
const filters : string = "name sw "my form""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to 'name')

try {
    const val = await customFormsBetaApi.exportFormDefinitionsByTenant();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.exportFormDefinitionsByTenant(offset, limit, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getFileFromS3

> File getFileFromS3(formDefinitionID, fileID)

Download definition file by fileId.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| FormDefinitionID  Form definition ID | [default to undefined]
 **fileID** | **string**| FileID  String specifying the hashed name of the uploaded file we are retrieving. | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  } ],
  "detailCode" : "detailCode",
  "statusCode" : 0,
  "trackingId" : "trackingId"
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // FormDefinitionID  Form definition ID (default to undefined)
const fileID : string = "00000031N0J7R2B57M8YG73J7M.png"; // FileID  String specifying the hashed name of the uploaded file we are retrieving. (default to undefined)

try {
    const val = await customFormsBetaApi.getFileFromS3(formDefinitionID, fileID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.getFileFromS3(formDefinitionID, fileID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getFormDefinitionByKey

> FormDefinitionResponseBeta getFormDefinitionByKey(formDefinitionID)

Return a form definition.

Parameter `{formDefinitionID}` should match a form definition ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| Form definition ID | [default to undefined]

### Return type

[**FormDefinitionResponseBeta**](../Models/FormDefinitionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Grant Smith",
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  },
  "formInput" : [ {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  }, {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  } ],
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "created" : "2023-07-12T20:14:57.74486Z",
  "name" : "My form",
  "description" : "My form description",
  "modified" : "2023-07-12T20:14:57.74486Z",
  "id" : "00000000-0000-0000-0000-000000000000",
  "usedBy" : [ {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  }, {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  } ],
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // Form definition ID (default to undefined)

try {
    const val = await customFormsBetaApi.getFormDefinitionByKey(formDefinitionID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.getFormDefinitionByKey(formDefinitionID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getFormInstanceByKey

> FormInstanceResponseBeta getFormInstanceByKey(formInstanceID)

Returns a form instance.

Parameter `{formInstanceID}` should match a form instance ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formInstanceID** | **string**| Form instance ID | [default to undefined]

### Return type

[**FormInstanceResponseBeta**](../Models/FormInstanceResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "formInput" : {
    "input1" : "Sales"
  },
  "created" : "2023-07-12T20:14:57.74486Z",
  "standAloneFormUrl" : "https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000",
  "standAloneForm" : false,
  "createdBy" : {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "WORKFLOW_EXECUTION"
  },
  "recipients" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  } ],
  "expire" : "2023-08-12T20:14:57.74486Z",
  "formDefinitionId" : "49841cb8-00a5-4fbd-9888-8bbb28d48331",
  "formErrors" : [ {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  }, {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  } ],
  "modified" : "2023-07-12T20:14:57.74486Z",
  "formData" : {
    "department" : "Engineering"
  },
  "id" : "06a2d961-07fa-44d1-8d0a-2f6470e30fd2",
  "state" : "ASSIGNED",
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const formInstanceID : string = "00000000-0000-0000-0000-000000000000"; // Form instance ID (default to undefined)

try {
    const val = await customFormsBetaApi.getFormInstanceByKey(formInstanceID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.getFormInstanceByKey(formInstanceID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getFormInstanceFile

> File getFormInstanceFile(formInstanceID, fileID)

Download instance file by fileId.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formInstanceID** | **string**| FormInstanceID  Form instance ID | [default to undefined]
 **fileID** | **string**| FileID  String specifying the hashed name of the uploaded file we are retrieving. | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "This is an error",
    "locale" : "en-US"
  } ],
  "detailCode" : "detailCode",
  "statusCode" : 0,
  "trackingId" : "trackingId"
}


const formInstanceID : string = "00000000-0000-0000-0000-000000000000"; // FormInstanceID  Form instance ID (default to undefined)
const fileID : string = "00000031N0J7R2B57M8YG73J7M.png"; // FileID  String specifying the hashed name of the uploaded file we are retrieving. (default to undefined)

try {
    const val = await customFormsBetaApi.getFormInstanceFile(formInstanceID, fileID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.getFormInstanceFile(formInstanceID, fileID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importFormDefinitions

> ImportFormDefinitions202ResponseBeta importFormDefinitions(body)

Import form definitions from export.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Array&lt;ImportFormDefinitionsRequestInnerBeta&gt;**](../Models/ImportFormDefinitionsRequestInnerBeta.md)| Body is the request payload to import form definitions | [optional] 

### Return type

[**ImportFormDefinitions202ResponseBeta**](../Models/ImportFormDefinitions202ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "importedObjects" : [ {
    "self" : {
      "name" : "Temporary User Level Permissions - Requester",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "FORM_DEFINITION"
    },
    "version" : 0,
    "object" : {
      "owner" : {
        "name" : "Grant Smith",
        "id" : "2c9180867624cbd7017642d8c8c81f67",
        "type" : "IDENTITY"
      },
      "formInput" : [ {
        "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
        "id" : "00000000-0000-0000-0000-000000000000",
        "label" : "input1",
        "type" : "STRING"
      }, {
        "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
        "id" : "00000000-0000-0000-0000-000000000000",
        "label" : "input1",
        "type" : "STRING"
      } ],
      "formConditions" : [ {
        "ruleOperator" : "AND",
        "effects" : [ {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        }, {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        } ],
        "rules" : [ {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        }, {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        } ]
      }, {
        "ruleOperator" : "AND",
        "effects" : [ {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        }, {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        } ],
        "rules" : [ {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        }, {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        } ]
      } ],
      "created" : "2023-07-12T20:14:57.74486Z",
      "name" : "My form",
      "description" : "My form description",
      "modified" : "2023-07-12T20:14:57.74486Z",
      "id" : "00000000-0000-0000-0000-000000000000",
      "usedBy" : [ {
        "name" : "Access Request Form",
        "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
        "type" : "WORKFLOW"
      }, {
        "name" : "Access Request Form",
        "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
        "type" : "WORKFLOW"
      } ],
      "formElements" : [ {
        "id" : "00000000-0000-0000-0000-000000000000",
        "validations" : [ {
          "validationType" : "REQUIRED"
        }, {
          "validationType" : "REQUIRED"
        } ],
        "elementType" : "TEXT",
        "config" : {
          "label" : "Department"
        },
        "key" : "department"
      }, {
        "id" : "00000000-0000-0000-0000-000000000000",
        "validations" : [ {
          "validationType" : "REQUIRED"
        }, {
          "validationType" : "REQUIRED"
        } ],
        "elementType" : "TEXT",
        "config" : {
          "label" : "Department"
        },
        "key" : "department"
      } ]
    }
  }, {
    "self" : {
      "name" : "Temporary User Level Permissions - Requester",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "FORM_DEFINITION"
    },
    "version" : 0,
    "object" : {
      "owner" : {
        "name" : "Grant Smith",
        "id" : "2c9180867624cbd7017642d8c8c81f67",
        "type" : "IDENTITY"
      },
      "formInput" : [ {
        "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
        "id" : "00000000-0000-0000-0000-000000000000",
        "label" : "input1",
        "type" : "STRING"
      }, {
        "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
        "id" : "00000000-0000-0000-0000-000000000000",
        "label" : "input1",
        "type" : "STRING"
      } ],
      "formConditions" : [ {
        "ruleOperator" : "AND",
        "effects" : [ {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        }, {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        } ],
        "rules" : [ {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        }, {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        } ]
      }, {
        "ruleOperator" : "AND",
        "effects" : [ {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        }, {
          "config" : {
            "defaultValueLabel" : "Access to Remove",
            "element" : "8110662963316867"
          },
          "effectType" : "HIDE"
        } ],
        "rules" : [ {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        }, {
          "sourceType" : "ELEMENT",
          "valueType" : "STRING",
          "source" : "department",
          "value" : "Engineering",
          "operator" : "EQ"
        } ]
      } ],
      "created" : "2023-07-12T20:14:57.74486Z",
      "name" : "My form",
      "description" : "My form description",
      "modified" : "2023-07-12T20:14:57.74486Z",
      "id" : "00000000-0000-0000-0000-000000000000",
      "usedBy" : [ {
        "name" : "Access Request Form",
        "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
        "type" : "WORKFLOW"
      }, {
        "name" : "Access Request Form",
        "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
        "type" : "WORKFLOW"
      } ],
      "formElements" : [ {
        "id" : "00000000-0000-0000-0000-000000000000",
        "validations" : [ {
          "validationType" : "REQUIRED"
        }, {
          "validationType" : "REQUIRED"
        } ],
        "elementType" : "TEXT",
        "config" : {
          "label" : "Department"
        },
        "key" : "department"
      }, {
        "id" : "00000000-0000-0000-0000-000000000000",
        "validations" : [ {
          "validationType" : "REQUIRED"
        }, {
          "validationType" : "REQUIRED"
        } ],
        "elementType" : "TEXT",
        "config" : {
          "label" : "Department"
        },
        "key" : "department"
      } ]
    }
  } ],
  "warnings" : [ {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  }, {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  } ],
  "errors" : [ {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  }, {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  } ],
  "infos" : [ {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  }, {
    "detail" : {
      "key" : "{}"
    },
    "text" : "text",
    "key" : "key"
  } ]
}


const body : Array<ImportFormDefinitionsRequestInnerBeta> = [{version=1, self={name=All fields not required, id=05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa, type=FORM_DEFINITION}, object={id=05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa, name=All fields not required, description=description, owner={type=IDENTITY, id=3447d8ec2602455ab6f1e8408a0f0150}, usedBy=[{type=WORKFLOW, id=5008594c-dacc-4295-8fee-41df60477304}, {type=WORKFLOW, id=97e75a75-c179-4fbc-a2da-b5fa4aaa8743}], formInput=[{type=STRING, label=input1, description=A single dynamic scalar value (i.e. number, string, date, etc) that can be passed into the form for use in conditional logic}], formElements=[{id=3069272797630701, elementType=SECTION, config={label=First Section, formElements=[{id=3069272797630700, elementType=TEXT, key=firstName, config={label=First Name}}, {id=3498415402897539, elementType=TEXT, key=lastName, config={label=Last Name}}]}}], formConditions=[{ruleOperator=AND, rules=[{sourceType=INPUT, source=Department, operator=EQ, valueType=STRING, value=Sales}], effects=[{effectType=HIDE, config={element=2614088730489570}}]}], created=2022-10-04T19:27:04.456Z, modified=2022-11-16T20:45:02.172Z}}]; // Body is the request payload to import form definitions (optional)

try {
    const val = await customFormsBetaApi.importFormDefinitions();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.importFormDefinitions(body);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchFormDefinition

> FormDefinitionResponseBeta patchFormDefinition(formDefinitionID, body)

Patch a form definition.

Parameter `{formDefinitionID}` should match a form definition ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| Form definition ID | [default to undefined]
 **body** | [**Array&lt;{ [key: string]: object; }&gt;**](../Models/any.md)| Body is the request payload to patch a form definition, check: https://jsonpatch.com | [optional] 

### Return type

[**FormDefinitionResponseBeta**](../Models/FormDefinitionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Grant Smith",
    "id" : "2c9180867624cbd7017642d8c8c81f67",
    "type" : "IDENTITY"
  },
  "formInput" : [ {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  }, {
    "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
    "id" : "00000000-0000-0000-0000-000000000000",
    "label" : "input1",
    "type" : "STRING"
  } ],
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "created" : "2023-07-12T20:14:57.74486Z",
  "name" : "My form",
  "description" : "My form description",
  "modified" : "2023-07-12T20:14:57.74486Z",
  "id" : "00000000-0000-0000-0000-000000000000",
  "usedBy" : [ {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  }, {
    "name" : "Access Request Form",
    "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
    "type" : "WORKFLOW"
  } ],
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // Form definition ID (default to undefined)
const body : Array<{ [key: string]: object; }> = [{op=replace, path=/description, value=test-description}]; // Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)

try {
    const val = await customFormsBetaApi.patchFormDefinition(formDefinitionID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.patchFormDefinition(formDefinitionID, body);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchFormInstance

> FormInstanceResponseBeta patchFormInstance(formInstanceID, body)

Patch a form instance.

Parameter `{formInstanceID}` should match a form instance ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formInstanceID** | **string**| Form instance ID | [default to undefined]
 **body** | [**Array&lt;{ [key: string]: object; }&gt;**](../Models/any.md)| Body is the request payload to patch a form instance, check: https://jsonpatch.com | [optional] 

### Return type

[**FormInstanceResponseBeta**](../Models/FormInstanceResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "formInput" : {
    "input1" : "Sales"
  },
  "created" : "2023-07-12T20:14:57.74486Z",
  "standAloneFormUrl" : "https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000",
  "standAloneForm" : false,
  "createdBy" : {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "WORKFLOW_EXECUTION"
  },
  "recipients" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  } ],
  "expire" : "2023-08-12T20:14:57.74486Z",
  "formDefinitionId" : "49841cb8-00a5-4fbd-9888-8bbb28d48331",
  "formErrors" : [ {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  }, {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  } ],
  "modified" : "2023-07-12T20:14:57.74486Z",
  "formData" : {
    "department" : "Engineering"
  },
  "id" : "06a2d961-07fa-44d1-8d0a-2f6470e30fd2",
  "state" : "ASSIGNED",
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}


const formInstanceID : string = "00000000-0000-0000-0000-000000000000"; // Form instance ID (default to undefined)
const body : Array<{ [key: string]: object; }> = [{op=replace, path=/state, value=SUBMITTED}, {op=replace, path=/formData, value={a-key-1=a-value-1, a-key-2=true, a-key-3=1}}]; // Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)

try {
    const val = await customFormsBetaApi.patchFormInstance(formInstanceID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.patchFormInstance(formInstanceID, body);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## searchFormDefinitionsByTenant

> ListFormDefinitionsByTenantResponseBeta searchFormDefinitionsByTenant(offset, limit, filters, sorters)

Export form definitions by tenant.

No parameters required.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
 **limit** | **number**| Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [optional] [default to &#39;name&#39;]

### Return type

[**ListFormDefinitionsByTenantResponseBeta**](../Models/ListFormDefinitionsByTenantResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "count" : 1,
  "results" : [ {
    "owner" : {
      "name" : "Grant Smith",
      "id" : "2c9180867624cbd7017642d8c8c81f67",
      "type" : "IDENTITY"
    },
    "formInput" : [ {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    }, {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    } ],
    "formConditions" : [ {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    }, {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    } ],
    "created" : "2023-07-12T20:14:57.74486Z",
    "name" : "My form",
    "description" : "My form description",
    "modified" : "2023-07-12T20:14:57.74486Z",
    "id" : "00000000-0000-0000-0000-000000000000",
    "usedBy" : [ {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    }, {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    } ],
    "formElements" : [ {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    }, {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    } ]
  }, {
    "owner" : {
      "name" : "Grant Smith",
      "id" : "2c9180867624cbd7017642d8c8c81f67",
      "type" : "IDENTITY"
    },
    "formInput" : [ {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    }, {
      "description" : "A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic",
      "id" : "00000000-0000-0000-0000-000000000000",
      "label" : "input1",
      "type" : "STRING"
    } ],
    "formConditions" : [ {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    }, {
      "ruleOperator" : "AND",
      "effects" : [ {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      }, {
        "config" : {
          "defaultValueLabel" : "Access to Remove",
          "element" : "8110662963316867"
        },
        "effectType" : "HIDE"
      } ],
      "rules" : [ {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      }, {
        "sourceType" : "ELEMENT",
        "valueType" : "STRING",
        "source" : "department",
        "value" : "Engineering",
        "operator" : "EQ"
      } ]
    } ],
    "created" : "2023-07-12T20:14:57.74486Z",
    "name" : "My form",
    "description" : "My form description",
    "modified" : "2023-07-12T20:14:57.74486Z",
    "id" : "00000000-0000-0000-0000-000000000000",
    "usedBy" : [ {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    }, {
      "name" : "Access Request Form",
      "id" : "61940a92-5484-42bc-bc10-b9982b218cdf",
      "type" : "WORKFLOW"
    } ],
    "formElements" : [ {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    }, {
      "id" : "00000000-0000-0000-0000-000000000000",
      "validations" : [ {
        "validationType" : "REQUIRED"
      }, {
        "validationType" : "REQUIRED"
      } ],
      "elementType" : "TEXT",
      "config" : {
        "label" : "Department"
      },
      "key" : "department"
    } ]
  } ]
}


const offset : number = 250; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
const limit : number = 250; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
const filters : string = "name sw "my form""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional) (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional) (default to 'name')

try {
    const val = await customFormsBetaApi.searchFormDefinitionsByTenant();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.searchFormDefinitionsByTenant(offset, limit, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## searchFormElementDataByElementID

> ListFormElementDataByElementIDResponseBeta searchFormElementDataByElementID(formInstanceID, formElementID, limit, filters, query)

Retrieves dynamic data by element.

Parameter `{formInstanceID}` should match a form instance ID. Parameter `{formElementID}` should match a form element ID at the data source configuration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formInstanceID** | **string**| Form instance ID | [default to undefined]
 **formElementID** | **string**| Form element ID | [default to undefined]
 **limit** | **number**| Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | [optional] [default to undefined]
 **query** | **string**| String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | [optional] [default to undefined]

### Return type

[**ListFormElementDataByElementIDResponseBeta**](../Models/ListFormElementDataByElementIDResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "results" : "{\"results\":[{\"label\":\"Alfred 255e71dfc6e\",\"subLabel\":\"Alfred.255e71dfc6e@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e16676\"},{\"label\":\"Alize eba9d4cd27da\",\"subLabel\":\"Alize.eba9d4cd27da@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2f1667c\"},{\"label\":\"Antonina 01f69c3ea\",\"subLabel\":\"Antonina.01f69c3ea@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2f9667e\"},{\"label\":\"Ardella 21e78ce155\",\"subLabel\":\"Ardella.21e78ce155@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e6667a\"},{\"label\":\"Arnaldo d8582b6e17\",\"subLabel\":\"Arnaldo.d8582b6e17@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced3426686\"},{\"label\":\"Aurelia admin24828\",\"subLabel\":\"Aurelia.admin24828@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e16674\"},{\"label\":\"Barbara 72ca418fdd\",\"subLabel\":\"Barbara.72ca418fdd@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2fb6680\"},{\"label\":\"Barbara ee1a2436ee\",\"subLabel\":\"Barbara.ee1a2436ee@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e56678\"},{\"label\":\"Baylee 652d72432f3\",\"subLabel\":\"Baylee.652d72432f3@testmail.identitysoon.com\",\"value\":\"2c91808582184782018227ced28b6aee\"},{\"label\":\"Brock e76b56ae4d49\",\"subLabel\":\"Brock.e76b56ae4d49@testmail.identitysoon.com\",\"value\":\"2c91808582184782018227ced28b6aef\"}]}"
}


const formInstanceID : string = "00000000-0000-0000-0000-000000000000"; // Form instance ID (default to undefined)
const formElementID : string = "1"; // Form element ID (default to undefined)
const limit : number = 250; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)
const filters : string = "value eq "ID01""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) (default to undefined)
const query : string = "support"; // String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) (default to undefined)

try {
    const val = await customFormsBetaApi.searchFormElementDataByElementID(formInstanceID, formElementID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.searchFormElementDataByElementID(formInstanceID, formElementID, limit, filters, query);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## searchFormInstancesByTenant

> Array&lt;FormInstanceResponseBeta&gt; searchFormInstancesByTenant()

List form instances by tenant.

No parameters required.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;FormInstanceResponseBeta&gt;**](../Models/FormInstanceResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

[ {
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "formInput" : {
    "input1" : "Sales"
  },
  "created" : "2023-07-12T20:14:57.74486Z",
  "standAloneFormUrl" : "https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000",
  "standAloneForm" : false,
  "createdBy" : {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "WORKFLOW_EXECUTION"
  },
  "recipients" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  } ],
  "expire" : "2023-08-12T20:14:57.74486Z",
  "formDefinitionId" : "49841cb8-00a5-4fbd-9888-8bbb28d48331",
  "formErrors" : [ {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  }, {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  } ],
  "modified" : "2023-07-12T20:14:57.74486Z",
  "formData" : {
    "department" : "Engineering"
  },
  "id" : "06a2d961-07fa-44d1-8d0a-2f6470e30fd2",
  "state" : "ASSIGNED",
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
}, {
  "formConditions" : [ {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  }, {
    "ruleOperator" : "AND",
    "effects" : [ {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    }, {
      "config" : {
        "defaultValueLabel" : "Access to Remove",
        "element" : "8110662963316867"
      },
      "effectType" : "HIDE"
    } ],
    "rules" : [ {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    }, {
      "sourceType" : "ELEMENT",
      "valueType" : "STRING",
      "source" : "department",
      "value" : "Engineering",
      "operator" : "EQ"
    } ]
  } ],
  "formInput" : {
    "input1" : "Sales"
  },
  "created" : "2023-07-12T20:14:57.74486Z",
  "standAloneFormUrl" : "https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000",
  "standAloneForm" : false,
  "createdBy" : {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "WORKFLOW_EXECUTION"
  },
  "recipients" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "type" : "IDENTITY"
  } ],
  "expire" : "2023-08-12T20:14:57.74486Z",
  "formDefinitionId" : "49841cb8-00a5-4fbd-9888-8bbb28d48331",
  "formErrors" : [ {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  }, {
    "messages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "This is an error",
      "locale" : "en-US"
    } ],
    "value" : "Engineering",
    "key" : "department"
  } ],
  "modified" : "2023-07-12T20:14:57.74486Z",
  "formData" : {
    "department" : "Engineering"
  },
  "id" : "06a2d961-07fa-44d1-8d0a-2f6470e30fd2",
  "state" : "ASSIGNED",
  "formElements" : [ {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "validations" : [ {
      "validationType" : "REQUIRED"
    }, {
      "validationType" : "REQUIRED"
    } ],
    "elementType" : "TEXT",
    "config" : {
      "label" : "Department"
    },
    "key" : "department"
  } ]
} ]



try {
    const val = await customFormsBetaApi.searchFormInstancesByTenant();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.searchFormInstancesByTenant();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## searchPreDefinedSelectOptions

> ListPredefinedSelectOptionsResponseBeta searchPreDefinedSelectOptions()

List predefined select options.

No parameters required.

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListPredefinedSelectOptionsResponseBeta**](../Models/ListPredefinedSelectOptionsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "results" : [ "IDENTITY", "IDENTITY" ]
}



try {
    const val = await customFormsBetaApi.searchPreDefinedSelectOptions();
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.searchPreDefinedSelectOptions();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## showPreviewDataSource

> PreviewDataSourceResponseBeta showPreviewDataSource(formDefinitionID, limit, filters, query, formElementPreviewRequestBeta)

Preview form definition data source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formDefinitionID** | **string**| Form definition ID | [default to undefined]
 **limit** | **number**| Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 10]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | [optional] [default to undefined]
 **query** | **string**| String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | [optional] [default to undefined]
 **formElementPreviewRequestBeta** | [**FormElementPreviewRequestBeta**](../Models/FormElementPreviewRequestBeta.md)| Body is the request payload to create a form definition dynamic schema | [optional] 

### Return type

[**PreviewDataSourceResponseBeta**](../Models/PreviewDataSourceResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomFormsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customFormsBetaApi = new CustomFormsBetaApi(apiConfig);

{
  "results" : "{\"results\":[{\"label\":\"Alfred 255e71dfc6e\",\"subLabel\":\"Alfred.255e71dfc6e@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e16676\"},{\"label\":\"Alize eba9d4cd27da\",\"subLabel\":\"Alize.eba9d4cd27da@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2f1667c\"},{\"label\":\"Antonina 01f69c3ea\",\"subLabel\":\"Antonina.01f69c3ea@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2f9667e\"},{\"label\":\"Ardella 21e78ce155\",\"subLabel\":\"Ardella.21e78ce155@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e6667a\"},{\"label\":\"Arnaldo d8582b6e17\",\"subLabel\":\"Arnaldo.d8582b6e17@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced3426686\"},{\"label\":\"Aurelia admin24828\",\"subLabel\":\"Aurelia.admin24828@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e16674\"},{\"label\":\"Barbara 72ca418fdd\",\"subLabel\":\"Barbara.72ca418fdd@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2fb6680\"},{\"label\":\"Barbara ee1a2436ee\",\"subLabel\":\"Barbara.ee1a2436ee@testmail.identitysoon.com\",\"value\":\"2c918084821847c5018227ced2e56678\"},{\"label\":\"Baylee 652d72432f3\",\"subLabel\":\"Baylee.652d72432f3@testmail.identitysoon.com\",\"value\":\"2c91808582184782018227ced28b6aee\"},{\"label\":\"Brock e76b56ae4d49\",\"subLabel\":\"Brock.e76b56ae4d49@testmail.identitysoon.com\",\"value\":\"2c91808582184782018227ced28b6aef\"}]}"
}


const formDefinitionID : string = "00000000-0000-0000-0000-000000000000"; // Form definition ID (default to undefined)
const limit : number = 10; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 10)
const filters : string = "value eq "ID01""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the `in` operator. The `not` composite operator must be used in front of the field. For example, the following is valid: `not value in (\"ID01\")` (optional) (default to undefined)
const query : string = "ac"; // String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \"starts with\" filter against  several fields. (optional) (default to undefined)
const formElementPreviewRequestBeta : FormElementPreviewRequestBeta = 

try {
    const val = await customFormsBetaApi.showPreviewDataSource(formDefinitionID);
    
    // Below is a request that includes all optional parameters      
    // const val = await customFormsBetaApi.showPreviewDataSource(formDefinitionID, limit, filters, query, formElementPreviewRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

