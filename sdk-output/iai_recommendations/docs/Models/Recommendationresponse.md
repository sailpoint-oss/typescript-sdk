---
id: v1-recommendationresponse
title: Recommendationresponse
pagination_label: Recommendationresponse
sidebar_label: Recommendationresponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Recommendationresponse', 'v1Recommendationresponse']
slug: /tools/sdk/typescript/iai_recommendations/models/recommendationresponse
tags: ['SDK', 'Software Development Kit', 'Recommendationresponse', 'v1Recommendationresponse']
---

# Recommendationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **(optional)** `Recommendationrequest` |  | [default to undefined]
**recommendation** | **(optional)** `string` | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [default to undefined]
**interpretations** | **(optional)** `Array<string>` | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ \"Not approved in the last 6 months.\" ]. Interpretations will be translated using the client\'s locale as found in the Accept-Language header. If a translation for the client\'s locale cannot be found, the US English translation will be returned. | [default to undefined]
**translationMessages** | **(optional)** `Array<Translationmessage>` | The list of translation messages, if they have been requested. | [default to undefined]
**recommenderCalculations** | **(optional)** `Recommendercalculations` |  | [default to undefined]

