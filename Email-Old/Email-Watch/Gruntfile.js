module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: [
          'src/*.html',
          'src/*.css'
        ],
        tasks: ['premailer']
      },
    },
    premailer: {
    simple: {
      options: {
        removeComments: true
      },
      files: {
        'dest/email.html': ['src/email.html']
      }
    }
  }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-premailer');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};