# Typescript SDK Generator

to generate the SDKs, run the following commands:

```
java -jar openapi-generator-cli.jar generate -i /path/to/v3/sailpoint-api.v3.yaml -g typescript-axios -o sdk-output/v3 --global-property skipFormModel=false --config sdk-resources/v3-config.yaml --api-name-suffix V3 --model-name-suffix V3

java -jar openapi-generator-cli.jar generate -i /path/to/beta/sailpoint-api.beta.yaml -g typescript-axios -o sdk-output/beta --global-property skipFormModel=false --config sdk-resources/beta-config.yaml --api-name-suffix Beta --model-name-suffix Beta
```

run ```npm install``` in the sdk-output directory and in the examples directory, then you should be able to run the examples.