module.exports = function (grunt) {
    grunt.config('react', {
        react: {
            files: [{
                expand: true,
                cwd: 'source/js/app/views/jsx',
                src: [ '**/*.jsx' ],
                dest: 'source/js/app/views/compiled',
                ext: '.js'
            }]
        }
    });
};
