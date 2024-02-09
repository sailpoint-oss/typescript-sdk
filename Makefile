.PHONY: specs
specs:	
	git clone https://github.com/sailpoint-oss/api-specs.git api-specs

.PHONY: clean-specs
clean-specs:	
	rm -rf ./api-specs

.PHONY: build
build:	
	rm -rf ./sdk-output/v3
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.v3.yaml -g typescript-axios -o sdk-output/v3 --global-property skipFormModel=false --config sdk-resources/v3-config.yaml
	rm -rf ./sdk-output/beta
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.beta.yaml -g typescript-axios -o sdk-output/beta --global-property skipFormModel=false --config sdk-resources/beta-config.yaml --api-name-suffix BetaApi --model-name-suffix Beta


.PHONY: test
test:	
	cd sdk-output; \
	npm install; \
	npm run build
	