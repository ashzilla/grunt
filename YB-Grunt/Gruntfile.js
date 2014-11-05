module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Takes your scss files and compiles them to css
        sass: {
          dist: {
            options: {
              style: 'compressed',
              sourcemap: 'auto'
            },
            files: {
              'scss/global-compiled.css': 'scss/global.scss'
            }
          }
        },

        // Takes your css files and adds browser prefxes
        autoprefixer: {
            dist: {
              options: {
                          
            },
              files: {
                  'scss/global.css': 'scss/global-compiled.css'
              }
            }
        },

        // Takes your css file will minify it
        cssmin: {
          minify: {
            expand: true,
            cwd: 'scss/',
            src: 'global.css',
            dest: 'css/',
            ext: '.css',
          }
        },

        // Watches for changes to files then runs grunt tasks
        watch: {
          files: ['scss/*.html', 'scss/*.scss'],
          tasks: ['action'],
          options: {
            // Start a live reload server on the default port 35729
            // livereload: true,
        },
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    // Once a file has been changes it runs the actions listed
    grunt.registerTask('action', ['sass','autoprefixer','cssmin']);

};
