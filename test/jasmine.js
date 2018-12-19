const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/houndstoothtopiaTheme/test/src/**/*.ts',
        'src/houndstoothtopiaTheme/test/src/**/*.js',
        'src/houndstoothtopiaTheme/test/src/**/*.tsx',
        'src/houndstoothtopiaTheme/test/src/**/*.jsx',
    ],
}
