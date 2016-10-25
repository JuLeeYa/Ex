module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
    options: {
      separator: '',
    },
    dist: {
      src: [ 'src/style/reset.scss', 'src/style/mobile.scss','src/style/tablet.scss','src/style/desctop.scss' ],
      dest: 'src/style/main.scss',
    },
  },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/style',
        src: ['main.scss'],
        dest: 'dist',
        ext: '.css'
      }]
    }
  },
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'script.min.js': ['dist/script.js']
      }
    }
  },

   watch: {
  css: {
    files: 'src/style/*.scss',
    tasks: ['concat','sass'],
    options: {
      livereload: true,
    },
  },
  
},
  });

grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', [ 'concat','sass','uglify']);

};