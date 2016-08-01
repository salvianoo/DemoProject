module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'public/css/styles.css': 'public/sass/styles.scss'
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: 'build-demo.zip',
          pretty: true
        },
        expand: true,
        cwd: '.',
        src: [
          '**',
          '!node_modules/**',
          '!.git/**',
          '!build-demo.zip',
          '!public/sass/**'
        ]
      }
    }
  });
  grunt.registerTask('default', ['sass:dist']);
  grunt.registerTask('zip', ['compress']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-compress');
};
