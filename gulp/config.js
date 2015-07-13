'use strict';

module.exports = {

  'browserport'  : 3000,
  'uiport'       : 3001,
  'serverport'   : 3002,

  'dist': {
    'root'  : 'build'
  },

  'styles': {
    'src'  : 'src/sass/**/*.scss',
    'dest' : 'build/css',
    'outputstyle': 'expanded' // Values: nested, expanded, compact, compressed
  },

  'images': {
    'src' : 'src/img/**/*',
    'dest': 'build/img'
  },

  'scripts': {
    'src' : 'app/ng/**/*.js',
    'dest': 'build/ng'
  },


  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'data': {
    'src' : ['app/data/**/*'],
    'dest': 'build/data'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/templates'
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
