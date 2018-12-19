const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/houndstoothtopia-theme/test/src/**/*.ts',
        'src/houndstoothtopia-theme/test/src/**/*.js',
        'src/houndstoothtopia-theme/test/src/**/*.tsx',
        'src/houndstoothtopia-theme/test/src/**/*.jsx',
    ],
}
