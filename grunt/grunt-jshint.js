module.exports = function (grunt) {
  'use strict';

  grunt.config('jshint', {
    config: {
      options: {
        reporter: require('jshint-stylish-ex')
      },
      src: ['algorithms/**/*.js', 'spec/**/*.js']
    }
  });
};
