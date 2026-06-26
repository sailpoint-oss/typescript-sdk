.PHONY: specs
specs:
	git clone https://github.com/sailpoint-oss/api-specs.git api-specs

.PHONY: clean-specs
clean-specs:
	rm -rf ./api-specs

APIS_DIR ?= api-specs/idn/apis

.PHONY: build
build:
	node sdk-resources/build-versioned-sdk.js $(APIS_DIR)

.PHONY: build-partition
build-partition:
	node sdk-resources/build-versioned-sdk.js $(APIS_DIR) --partition $(PARTITION)

.PHONY: test
test:
	cd sdk-output; \
	npm install; \
	npm run build; \
	npm run test
