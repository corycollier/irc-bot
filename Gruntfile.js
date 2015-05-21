module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    // https://www.npmjs.com/package/grunt-contrib-jshint
    pkg : grunt.file.readJSON('package.json'),
    jshint : {
      all : ['Gruntfile.js', 'app/*.js', 'tests/**.js', './*.js']
    },
    // Run Jasmine tests
    // https://www.npmjs.com/package/grunt-jasmine-nodejs
    // NOTE: istanbul does not use any of these options when it runs Jasmine
    jasmine_nodejs : {
      options : {
        specNameSuffix   : "spec.js", // also accepts an array 
        helperNameSuffix : "helper.js",
        useHelpers       : false,
        // configure one or more built-in reporters 
        reporters : {
          console : {
            colors     : true,
            cleanStack : true,
            verbose    : true
          },
          junit    : false,
          nunit    : false,
          teamcity : false,
          tap      : false
        },
        // add custom Jasmine reporter(s) 
        customReporters : []
      },
      all : {
        // target specific options 
        options : {
          useHelpers : false
        },
        // spec files 
        specs : [
          "tests/app/**-spec.js"
        ],
      }
    },
    // Generate coverage report 
    // https://github.com/sindresorhus/grunt-shell
    // This is a messy hack, because Istanbul runs Jasmine but it gets Jasmine
    // options from the file spec/support/jasmine.json instead of this Grunt config.
    // Istanbul gets its options from the file .istanbul.yml
    shell: {
      istanbul: {
        command: 'istanbul cover jasmine JASMINE_CONFIG_PATH=./tests/jasmine.json tests/app/**.js'
      }
    },
    // Enforce coverage thresholds with istanbul
    // https://www.npmjs.com/package/grunt-istanbul-coverage
    // NOTE 1: this plugin does NOT run istanbul! The .json coverage files generated
    // by Istanbul must already exist.
    // NOTE 2: you cannot register another task called 'coverage'
    coverage : {
      default : {
        options : {
          thresholds : {
            'statements' : 90,
            'branches'   : 90,
            'lines'      : 90,
            'functions'  : 90
          },
          dir : 'build/coverage',
          root : '.'
        }
      }
    },
    clean : ['build/coverage/*'],
    // https://www.npmjs.com/package/grunt-jsdoc
    jsdoc : {
      dist : {
        src : ['app/*.js', './*.js'],
        options : {
          destination : 'build/docs'
        }
      }
    },
  });

  // Load the Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');
  grunt.loadNpmTasks('grunt-istanbul-coverage');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-shell');

  // Define tasks
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('doc', ['jsdoc']);
  grunt.registerTask('test', ['jasmine_nodejs']);
  grunt.registerTask('cover', ['clean', 'shell:istanbul', 'coverage']);
};
