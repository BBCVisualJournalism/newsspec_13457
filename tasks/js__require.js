module.exports = function (grunt) {

    // *************************************************************************
    // REQUIRE PATHS
    // Add any paths here you want shortened. Relative to the 'js' dir.
    // *************************************************************************

    var amdModulePaths = {
        'pubsub': './lib/vendors/jquery/pubsub',
        'bootstrap': './lib/news_special/bootstrap',
        'istats-1': './lib/vendors/istats/istats',
        'text': './lib/vendors/require/text',
        'lib/vendors/d3/d3-3.5.2.min': 'empty:',
        'lib/vendors/d3/topojson-1.6.18.min': 'empty:',
        'lib/vendors/react/react-0.13.2.min': 'empty:',
        'lib/vendors/backbone/backbone-1.1.2.min': 'empty:',
        'lib/vendors/backbone/underscore-1.7.0.min': 'empty:',
        'app/maps/england.topojson': 'empty:'
    };

    // *************************************************************************
    // GRUNT CONFIG
    // You shouldn't need to edit anything below here
    // *************************************************************************

    var _ = require('lodash-node'),
        requirePathsForJquery1build = _.merge({
        'd3': './lib/vendors/d3/d3.legacy',
        'jquery': './lib/vendors/jquery/jquery-1.11.1',
        'underscore': './lib/vendors/backbone/underscore-1.7.0.min'
    }, amdModulePaths),
        requirePathsForJquery2build = _.merge({
        'd3': './lib/vendors/d3/d3',
        'jquery': './lib/vendors/jquery/jquery-2.1.1',
        'underscore': './lib/vendors/backbone/underscore-1.7.0.min'
    }, amdModulePaths),
        requireJsDefaults = {
            options: {
                baseUrl: './source/js',
                optimize: 'uglify2',
                preserveLicenseComments: false
            }
        },
        legacyIeConfig = _.merge({
                options: {
                    paths: requirePathsForJquery1build,
                    generateSourceMaps: false,
                    out: './content/<%= config.services.default %>/js/all-legacyie.js',
                    name: './app'
                }
            }, requireJsDefaults),
        allHtml5Config = _.merge({
                options: {
                    paths: requirePathsForJquery2build,
                    generateSourceMaps: true,
                    out: './content/<%= config.services.default %>/js/all-html5.js',
                    name: './app'
                }
            }, requireJsDefaults),
        liteConfig = _.merge({
                options: {
                    paths: requirePathsForJquery2build,
                    generateSourceMaps: false,
                    name: './lib/vendors/almond/almond',
                    out: './content/<%= config.services.default %>/js/lite.js',
                    include: ['app--lite'],
                    insertRequire: ['app--lite'],
                    wrap: true
                }
            }, requireJsDefaults);

    grunt.config(['amdModulePaths'],       amdModulePaths);
    grunt.config(['requirejs', 'jquery1'], legacyIeConfig);
    grunt.config(['requirejs', 'jquery2'], allHtml5Config);
    grunt.config(['requirejs', 'lite'],    liteConfig);
};
