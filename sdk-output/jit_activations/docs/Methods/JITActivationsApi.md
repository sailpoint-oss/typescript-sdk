---
id: v1-jit-activations
title: JITActivations
pagination_label: JITActivations
sidebar_label: JITActivations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JITActivations', 'v1JITActivations']
slug: /tools/sdk/typescript/jit_activations/methods/jit-activations
tags: ['SDK', 'Software Development Kit', 'JITActivations', 'v1JITActivations']
---

# JITActivationsApi
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-activate-workflow-v1**](#start-activate-workflow-v1) | **POST** `/jit-activations/v1/activate` | Start JIT activation workflow
[**start-deactivate-workflow-v1**](#start-deactivate-workflow-v1) | **POST** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow-v1**](#start-extend-workflow-v1) | **POST** `/jit-activations/v1/extend` | Extend JIT activation workflow


## start-activate-workflow-v1
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-activate-workflow-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationActivateRequest** | `JitActivationActivateRequest` |  | 

### Return type

`JitActivationActivateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { JitActivationActivateRequest } from 'sailpoint-api-client/dist/jit_activations/api';

const configuration = new Configuration();
const apiInstance = new JITActivationsApi(configuration);
const jitActivationActivateRequest: JitActivationActivateRequest = {
  "activationPeriodMins" : 120,
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}; // 
const result = await apiInstance.startActivateWorkflowV1({ jitActivationActivateRequest: jitActivationActivateRequest });
console.log(result);
```

[[Back to top]](#)

## start-deactivate-workflow-v1
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-deactivate-workflow-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationDeactivateRequest** | `JitActivationDeactivateRequest` |  | 

### Return type

`JitActivationDeactivateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { JitActivationDeactivateRequest } from 'sailpoint-api-client/dist/jit_activations/api';

const configuration = new Configuration();
const apiInstance = new JITActivationsApi(configuration);
const jitActivationDeactivateRequest: JitActivationDeactivateRequest = {
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}; // 
const result = await apiInstance.startDeactivateWorkflowV1({ jitActivationDeactivateRequest: jitActivationDeactivateRequest });
console.log(result);
```

[[Back to top]](#)

## start-extend-workflow-v1
Extend JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-extend-workflow-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationExtendRequest** | `JitActivationExtendRequest` |  | 

### Return type

`JitActivationExtendResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationsApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { JitActivationExtendRequest } from 'sailpoint-api-client/dist/jit_activations/api';

const configuration = new Configuration();
const apiInstance = new JITActivationsApi(configuration);
const jitActivationExtendRequest: JitActivationExtendRequest = {
  "activationPeriodExtensionMins" : 120,
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}; // 
const result = await apiInstance.startExtendWorkflowV1({ jitActivationExtendRequest: jitActivationExtendRequest });
console.log(result);
```

[[Back to top]](#)

