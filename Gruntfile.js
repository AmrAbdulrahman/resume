'use strict';

let _ = require('lodash');
let recursiveReadSync = require('recursive-readdir-sync');
let htmlFromJadeMap = {};
let allSrcFiles = recursiveReadSync('./src');
let jadeFiles = _.filter(allSrcFiles, (file) => file.substr(-5) === '.jade');

_.each(jadeFiles, (jadeFile) => {
  let htmlFilePath = jadeFile.replace('src', 'build').replace('jade', 'html');
  htmlFromJadeMap[htmlFilePath] = jadeFile;
});

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        minified: false,
        debug: false,
      },
      build: {
        options: {
          transform: [[
            'babelify', {presets: ["es2015"]}
          ]
        ],
      },
      files: {
        'build/app.js': ['src/index.js'],
      },
     },
    },
    less: {
      build: {
        options: {
          paths: ['app/less/'],
          //compress: true,
        },
        files: {
          'build/app.css': 'src/index.less',
        },
      },
    },
    jade: {
      options: {
        debug: false,
      },
      build: {
        files: htmlFromJadeMap,
      },
    },
    copy: {
      images: {
        cwd: 'src/img',
        src: _.map(['jpg', 'png', 'svg', 'jpeg'], (ext) => '**/*.' + ext),
        dest: 'build/img',
        expand: true,
      },
      'bootstrap/fonts': {
        cwd: 'node_modules/bootstrap/dist/fonts',
        src: _.map(['eot', 'svg', 'ttf', 'woff', 'woff2'], (ext) => '**/*.' + ext),
        dest: 'build/fonts',
        expand: true,
      },
      'fontawesome/fonts': {
        cwd: 'node_modules/font-awesome/fonts',
        src: _.map(['eot', 'svg', 'ttf', 'woff', 'woff2'], (ext) => '**/*.' + ext),
        dest: 'build/fonts',
        expand: true,
      },
    },
    connect: {
      server: {
        options: {
          base: 'build',
          port: 7070,
        },
      },
    },
    watch: {
      assets: {
        files: _.map(['jpg', 'png', 'svg'], (ext) => `src/**/*.${ext}`),
        tasks: [
          'copy',
        ],
      },
      styles: {
        files: 'src/**/*.less',
        tasks: [
          'less',
        ],
      },
      js: { // just reload
        files: 'src/**/*.js',
        tasks: [
          'browserify',
        ],
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: [
          'jade',
        ],
      },
      options: {
        livereload: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'copy',
    'browserify',
    'less',
    'jade',
    'connect',
    'watch',
  ]);
};
