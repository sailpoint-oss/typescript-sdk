.PHONY: specs
specs:
	git clone https://github.com/sailpoint-oss/api-specs.git api-specs

.PHONY: clean-specs
clean-specs:
	rm -rf ./api-specs

.PHONY: build
build:
	rm -rf ./sdk-output/v3
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.v3.yaml -g typescript-axios -o sdk-output/v3 --global-property skipFormModel=false,apiDocs=true,modelDocs=true --config sdk-resources/v3-config.yaml
	rm -rf ./sdk-output/beta
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.beta.yaml -g typescript-axios -o sdk-output/beta --global-property skipFormModel=false,apiDocs=true,modelDocs=true --config sdk-resources/beta-config.yaml --api-name-suffix BetaApi --model-name-suffix Beta
	rm -rf ./sdk-output/v2024
	node sdk-resources/prescript.js api-specs/idn/v2024/paths
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.v2024.yaml -g typescript-axios -o sdk-output/v2024 --global-property skipFormModel=false,apiDocs=true,modelDocs=true --config sdk-resources/v2024-config.yaml --api-name-suffix V2024Api --model-name-suffix V2024
	rm -rf ./sdk-output/v2025
	node sdk-resources/prescript.js api-specs/idn/v2025/paths
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.v2025.yaml -g typescript-axios -o sdk-output/v2025 --global-property skipFormModel=false,apiDocs=true,modelDocs=true --config sdk-resources/v2025-config.yaml --api-name-suffix V2025Api --model-name-suffix V2025
	rm -rf ./sdk-output/v2026
	node sdk-resources/prescript.js api-specs/idn/v2026/paths
	java -jar openapi-generator-cli.jar generate -i api-specs/idn/sailpoint-api.v2026.yaml -g typescript-axios -o sdk-output/v2026 --global-property skipFormModel=false,apiDocs=true,modelDocs=true --config sdk-resources/v2026-config.yaml --api-name-suffix V2026Api --model-name-suffix V2026

.PHONY: test
test:
	cd sdk-output; \
	npm install; \
	npm run build; \
	npm run test
