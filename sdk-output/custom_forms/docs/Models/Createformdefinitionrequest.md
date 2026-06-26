---
id: v1-createformdefinitionrequest-v1
title: CreateformdefinitionrequestV1
pagination_label: CreateformdefinitionrequestV1
sidebar_label: CreateformdefinitionrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateformdefinitionrequestV1', 'v1CreateformdefinitionrequestV1']
slug: /tools/sdk/typescript/custom_forms/models/createformdefinitionrequest-v1
tags: ['SDK', 'Software Development Kit', 'CreateformdefinitionrequestV1', 'v1CreateformdefinitionrequestV1']
---

# CreateformdefinitionrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** **string** | Description is the form definition description | [default to undefined]
**formConditions** | **(optional)** **Array&lt;FormconditionV1&gt;** | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [default to undefined]
**formElements** | **(optional)** **Array&lt;FormelementV1&gt;** | FormElements is a list of nested form elements | [default to undefined]
**formInput** | **(optional)** **Array&lt;FormdefinitioninputV1&gt;** | FormInput is a list of form inputs that are required when creating a form-instance object | [default to undefined]
**name** | **string** | Name is the form definition name | [default to undefined]
**owner** | **FormownerV1** |  | [default to undefined]
**usedBy** | **(optional)** **Array&lt;FormusedbyV1&gt;** | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [default to undefined]

