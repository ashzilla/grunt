module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
  grunt.loadNpmTasks('grunt-premailer');

  // Register the default tasks.
  grunt.registerTask('default', ['premailer']);
};