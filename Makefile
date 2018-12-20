commit:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	@set -e; pushd ../..; make lint DIR="src/houndstoothtopiaTheme"; popd

pull:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

ship:
	@set -e; pushd ../..; make ship PATTERN="houndstoothtopiaTheme"; popd

.PHONY: test
test:
	@set -e; pushd ../..; make test JASMINE_CONFIG_PATH="src/houndstoothtopiaTheme/test/jasmine.js" PATTERN_NAME="HOUNDSTOOTHTOPIA_THEME"; popd

update:
	@set -e; pushd ../..; make update PATTERN="houndstoothtopiaTheme"; popd
