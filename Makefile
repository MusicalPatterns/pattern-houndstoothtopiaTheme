pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/houndstoothtopia-theme/test/jasmine.js" PATTERN_NAME="HOUNDSTOOTHTOPIA_THEME" make test; popd

.PHONY: lint
lint:
	pushd ../..; DIR="src/houndstoothtopia-theme" make lint; popd
