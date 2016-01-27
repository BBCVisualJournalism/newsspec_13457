module.exports = function (grunt) {
    grunt.registerTask('copy_js_minimum', ['copy:jsLibs', 'copy:jsMaps']);
    grunt.registerTask('js', ['react', 'overrideImagerImageSizes', 'concurrent:js', 'copyRequiredJs']);

    var debugMode    = (grunt.config.get('config').debug === 'true'),
        scaffoldLite = (grunt.config.get('config').scaffoldLite === 'true');

    grunt.config(['concurrent', 'js'], {
        tasks: (function getListOfConcurrentTasks() {

            var applicationJS = ['jshint'];

            if (scaffoldLite) {
                applicationJS.push('requirejs:lite');
            }
            else if (!debugMode) {
                applicationJS.push('requirejs:jquery1');
                applicationJS.push('requirejs:jquery2');
            }

            return applicationJS;
        }())
    });

    grunt.registerTask('copyRequiredJs', function () {
        var filesToCopy = (debugMode ? 'copy:jsAll' : 'copy_js_minimum');
        grunt.task.run(filesToCopy);
        grunt.task.run('copy:appmanager');
        grunt.task.run('uglify');
    });

    grunt.config('uglify', {
        options: {
            mangle: true
        },
        my_target: {
            files: {
                'source/js/lib/news_special/iframemanager__host.min.js': ['source/js/lib/news_special/iframemanager__host.js']
            }
        }
    });
};
