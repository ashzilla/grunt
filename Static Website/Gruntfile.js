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
              'dest/styles.css': 'src/styles.scss'
            }
          }
        },        

        //Compile jade
        jade: {
          dist: {
            files: {
              'dest/index.html': ['src/index.jade']
            },
            options: {
              pretty: true
            }
          }
        },  

        livereload: {
          // Here we watch the files the premailer task will compile to
          // These files are sent to the live reload server after premailer compiles to them
          options: { livereload: true },
          files: ['dest/*.html'],
        },    
        
        // Watches for changes to css or email templates then runs grunt tasks
        watch: {
          files: ['src/*.scss', 'src/*.jade'],
          tasks: ['action'],
          options: {
            // Start a live reload server on the default port 35729
            // Below code clashes with livereload sublime package
            livereload: true,
        },
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    // Once a file has been changes it runs the actions listed
    grunt.registerTask('action', ['sass', 'jade']);

};
