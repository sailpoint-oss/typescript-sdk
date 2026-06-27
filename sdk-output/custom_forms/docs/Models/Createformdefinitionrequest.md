---
id: v1-createformdefinitionrequest
title: Createformdefinitionrequest
pagination_label: Createformdefinitionrequest
sidebar_label: Createformdefinitionrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Createformdefinitionrequest', 'v1Createformdefinitionrequest']
slug: /tools/sdk/typescript/custom_forms/models/createformdefinitionrequest
tags: ['SDK', 'Software Development Kit', 'Createformdefinitionrequest', 'v1Createformdefinitionrequest']
---

# Createformdefinitionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | Description is the form definition description | [default to undefined]
**formConditions** | **(optional)** `Array<Formcondition>` | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [default to undefined]
**formElements** | **(optional)** `Array<Formelement>` | FormElements is a list of nested form elements | [default to undefined]
**formInput** | **(optional)** `Array<Formdefinitioninput>` | FormInput is a list of form inputs that are required when creating a form-instance object | [default to undefined]
**name** | `string` | Name is the form definition name | [default to undefined]
**owner** | `Formowner` |  | [default to undefined]
**usedBy** | **(optional)** `Array<Formusedby>` | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [default to undefined]

