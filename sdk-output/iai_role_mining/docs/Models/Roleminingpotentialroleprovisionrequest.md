---
id: v1-roleminingpotentialroleprovisionrequest
title: Roleminingpotentialroleprovisionrequest
pagination_label: Roleminingpotentialroleprovisionrequest
sidebar_label: Roleminingpotentialroleprovisionrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Roleminingpotentialroleprovisionrequest', 'v1Roleminingpotentialroleprovisionrequest']
slug: /tools/sdk/typescript/iai_role_mining/models/roleminingpotentialroleprovisionrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleprovisionrequest', 'v1Roleminingpotentialroleprovisionrequest']
---

# Roleminingpotentialroleprovisionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleName** | **(optional)** `string` | Name of the new role being created | [default to undefined]
**roleDescription** | **(optional)** `string` | Short description of the new role being created | [default to undefined]
**ownerId** | **(optional)** `string` | ID of the identity that will own this role | [default to undefined]
**includeIdentities** | **(optional)** `boolean` | When true, create access requests for the identities associated with the potential role | [default to false]
**directlyAssignedEntitlements** | **(optional)** `boolean` | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [default to false]

