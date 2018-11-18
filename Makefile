.PHONY: lint
.PHONY: test

test:
	pushd ../..; make test; popd

lint:
	pushd ../..; make lint; popd

deploy:
	npm publish --access public
