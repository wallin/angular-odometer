'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var config = {};
  config.name = 'angular-odometer'

  grunt.initConfig({
    config: config,
    clean: ["dist"],
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    coffee: {
      options: {
        bare: true,
        force: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: "<%= config.name %>.coffee",
            dest: "dist",
            ext: ".js"
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'spec',
            src: "*.coffee",
            dest: "dist/spec",
            ext: ".js"
          }
        ]
      }
    },
    coffeelint: {
      app: ['src/*.coffee']
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true
      },
      target: ["dist/<%= config.name %>.js"]
    },
    uglify: {
      dist: {
        files: {
          "dist/<%= config.name %>.min.js": "dist/<%= config.name %>.js"
        }
      }
    }
  });

  grunt.registerTask('test', [
    'clean',
    'coffeelint',
    'coffee',
    'jshint',
    'karma'
  ]);

  grunt.registerTask('build', [
    'test',
    'uglify'
  ]);

  grunt.registerTask('default', ['build']);
};
