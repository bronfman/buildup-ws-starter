'use strict';

module.exports = {

  'browserport'  : 3000,
  'uiport'       : 3001,

  'dist': {
    'root'  : 'build'
  },

  'styles': {
    'src'         : 'src/sass/**/*.scss',
    'dest'        : 'build/css',
    'outputstyle' : 'expanded' // Values: nested, expanded, compact, compressed
  },

  'images': {
    'src' : 'src/img/**/*',
    'dest': 'build/img'
  },

  'views': {
    'src' : './src/views/**/*',
    'dest': 'build'
  },

  'scripts': {
    'src' : 'src/js/**/*.js',
    'dest': 'build/js'
  },

  'fonts': {
    'src' : ['src/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'prefixer': {
    'browsers'  : 'last 2 versions',
    'cascade'   : true
   },

  'watch': {
    'styles'    : './src/sass/**/*.scss',
    'html'      : './src/views/**/*.html'
  },








  'data': {
    'src' : ['app/data/**/*'],
    'dest': 'build/data'
  },


  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },



  'browserify': {
    'entries'   : ['./app/main.js', './app/vendor.js'],
    'bundleNames': ['main.js', 'vendor.js'],
    'sourcemap' : true
  }

};
