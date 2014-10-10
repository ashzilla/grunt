module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Takes your scss files and compiles them to css
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'src/styles.css': 'src/styles.scss'
            }
          }
        },

        //Removing the excess of CSS
        uncss: {
          dist: {
            src: ['src/email.html'],
            dest: 'src/css/tidy.css',
            options: {
              report: 'min' // optional: include to report savings
            }
          }
        },

        // Making use of the simplified CSS file
        processhtml: {
          dist: {
            files: {
              'src/email-simple.html': ['src/email.html']
            }
          }
        },

        // Inlines your css
        premailer: {
          simple: {
            options: {
              removeComments: true,
            },
            files: [{
              'dest/email.html': ['src/email-simple.html']
            }],
            livereload: {
              // Here we watch the files the premailer task will compile to
              // These files are sent to the live reload server after premailer compiles to them
              options: { livereload: true },
              files: ['dest/*'],
            },
          }
        },

        // Watches for changes to css or email templates then runs grunt tasks
        watch: {
          files: ['src/*.html', 'src/*.scss'],
          tasks: ['action'],
          options: {
            // Start a live reload server on the default port 35729
            livereload: true,
        },
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-premailer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    // Once a file has been changes it runs the actions listed
    grunt.registerTask('action', ['sass','uncss','processhtml','premailer']);

};
