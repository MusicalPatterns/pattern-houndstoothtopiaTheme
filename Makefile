pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/houndstoothtopiaTheme/test/jasmine.js" PATTERN_NAME="HOUNDSTOOTHTOPIA_THEME" make test; popd

.PHONY: lint
lint:
	pushd ../..; DIR="src/houndstoothtopiaTheme" make lint; popd
