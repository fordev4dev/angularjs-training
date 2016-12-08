module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cfg: {
      paths: {
        app: 'app',
        dest: 'dist'
      },
      files: {
        config: 'config.json',
        js: {
          app: [
            'app/app.module.js',
            'app/**/*.module.js',
            'app/**/*.js',
            '!app/**/*.spec.js'
          ],
          vendors: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-touch/angular-touch.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-busy/dist/angular-busy.min.js'
          ]
        },
        css: {
          app: '<%= cfg.paths.app %>/styles/**/*.css',
          vendors: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/angular-busy/dist/angular-busy.min.css'
          ]
        }
      }
    },
    clean: {
      dist: '<%= cfg.paths.dest %>'
    },
    concat: {
      cssVendors: {
        src: '<%= cfg.files.css.vendors %>',
        dest: '<%= cfg.paths.dest %>/vendors.css'
      },
      jsVendors: {
        src: '<%= cfg.files.js.vendors %>',
        dest: '<%= cfg.paths.dest %>/vendors.js'
      },
      jsApp: {
        src: '<%= cfg.files.js.app %>',
        dest: '<%= cfg.paths.dest %>/app.js'
      }
    },
    copy: {
      favicon: {
        src: '<%= cfg.paths.app %>/favicon.ico',
        dest: '<%= cfg.paths.dest %>/favicon.ico'
      },
      index: {
        src: '<%= cfg.paths.app %>/index.html',
        dest: '<%= cfg.paths.dest %>/index.html'
      }
    },
    cssmin: {
      cssApp: {
        files: [{
          src: '<%= cfg.files.css.app %>',
          dest: '<%= cfg.paths.dest %>/app.min.css'
        }]
      }
    },
    ngconstant: {
      options: {
        name: 'app.config',
        dest: '<%= cfg.paths.dest %>/config.js',
        constants: '<%= cfg.files.config %>'
      },
      config: {}
    },
    ngtemplates: {
      templates: {
        cwd: 'app', // requires app instead of cfg.paths.app variable, along with cwd, in order to remove the relative path 
        src: '**/templates/**/*.html',
        dest: '<%= cfg.paths.dest %>/templates.js',
      },
      options:    {
        module: 'app',
        htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
      }
    },
    watch: {
      favicon: {
        files: ['<%= cfg.paths.app %>/favicon.ico'],
        tasks: ['copy:favicon']
      },
      index: {
        files: ['<%= cfg.paths.app %>/index.html'],
        tasks: ['copy:index']
      },
      config: {
        files: ['<%= cfg.files.config %>'],
        tasks: ['ngconstant']
      },
      templates: {
        files: ['app/**/templates/**/*.html'],
        tasks: ['ngtemplates']
      },
      jsApp: {
        files: ['<%= cfg.files.js.app %>'],
        tasks: ['concat:jsApp']
      },
      jsVendors: {
        files: ['<%= cfg.files.js.vendors %>'],
        tasks: ['concat:jsVendors']
      },
      cssApp: {
        files: ['<%= cfg.files.css.app %>'],
        tasks: ['cssmin:cssApp']
      },
      cssVendors: {
        files: ['<%= cfg.files.css.vendors %>'],
        tasks: ['concat:cssVendors']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', [
    'clean',
    'copy:favicon',
    'copy:index',
    'concat',
    'cssmin',
    'ngconstant',
    'ngtemplates'
  ]);

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);
};
