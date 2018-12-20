commit:
	../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	pushd ../..; make lint DIR="src/houndstoothtopiaTheme"; popd

pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	../../node_modules/@musical-patterns/cli/bin/push.sh

.PHONY: test
test:
	pushd ../..; make test JASMINE_CONFIG_PATH="src/houndstoothtopiaTheme/test/jasmine.js" PATTERN_NAME="HOUNDSTOOTHTOPIA_THEME"; popd

update:
	pushd ../..; make update PATTERN="HOUNDSTOOTHTOPIA_THEME"; popd
