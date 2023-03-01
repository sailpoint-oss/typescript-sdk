# SailPoint API Client

## Description

A typescript sdk for accessing the SailPoint IdentityNow REST API's.

## Installation

```bash
npm install sailpoint-api-client
```

## Create a configuration file or save your configuration as environment variables

You can create a local configuration file using the [CLI tool](https://github.com/sailpoint-oss/sailpoint-cli#configuration) or you can store your configuration in environment variables

* SAIL_BASE_URL
* SAIL_CLIENT_ID
* SAIL_CLIENT_SECRET

## Examples

Simply import the API you want to work with, create a new configuration and get started.

```typescript

import { Configuration, TransformsApi, TransformsApiCreateTransformRequest} from "sailpoint-api-client"

const createTransform = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsApi(apiConfig)
    let transform: TransformsApiCreateTransformRequest = 
    {
        transform:
        {
            name: "Test Transform",
            type: "dateFormat",
            attributes: {
                inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",
                outputFormat: "yyyy/dd/MM"
            }
        }
    }
    const val = await api.createTransform(transform)
    console.log(val)
}

createTransform()

```

### See more uses of the SDK [here](../examples/src/index.ts)
