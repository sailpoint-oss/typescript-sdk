# ManagedClusterBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ManagedCluster ID | [default to undefined]
**name** | **string** | ManagedCluster name | [optional] [default to undefined]
**pod** | **string** | ManagedCluster pod | [optional] [default to undefined]
**org** | **string** | ManagedCluster org | [optional] [default to undefined]
**type** | [**ManagedClusterTypesBeta**](ManagedClusterTypesBeta.md) |  | [optional] [default to undefined]
**configuration** | **{ [key: string]: string | null; }** | ManagedProcess configuration map | [optional] [default to undefined]
**keyPair** | [**ManagedClusterKeyPairBeta**](ManagedClusterKeyPairBeta.md) |  | [optional] [default to undefined]
**attributes** | [**ManagedClusterAttributesBeta**](ManagedClusterAttributesBeta.md) |  | [optional] [default to undefined]
**description** | **string** | ManagedCluster description | [optional] [default to undefined]
**redis** | [**ManagedClusterRedisBeta**](ManagedClusterRedisBeta.md) |  | [optional] [default to undefined]
**clientType** | [**ManagedClientTypeBeta**](ManagedClientTypeBeta.md) |  | [default to undefined]
**ccgVersion** | **string** | CCG version used by the ManagedCluster | [default to undefined]
**pinnedConfig** | **boolean** | boolean flag indiacting whether or not the cluster configuration is pinned | [optional] [default to false]
**logConfiguration** | [**ClientLogConfigurationBeta**](ClientLogConfigurationBeta.md) |  | [optional] [default to undefined]
**operational** | **boolean** | Whether or not the cluster is operational or not | [optional] [default to false]
**status** | **string** | Cluster status | [optional] [default to undefined]
**publicKeyCertificate** | **string** | Public key certificate | [optional] [default to undefined]
**publicKeyThumbprint** | **string** | Public key thumbprint | [optional] [default to undefined]
**publicKey** | **string** | Public key | [optional] [default to undefined]
**alertKey** | **string** | Key describing any immediate cluster alerts | [optional] [default to undefined]
**clientIds** | **Array&lt;string&gt;** | List of clients in a cluster | [optional] [default to undefined]
**serviceCount** | **number** | Number of services bound to a cluster | [optional] [default to 0]
**ccId** | **string** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to &#39;0&#39;]
**createdAt** | **string** | The date/time this cluster was created | [optional] [default to undefined]
**updatedAt** | **string** | The date/time this cluster was last updated | [optional] [default to undefined]

