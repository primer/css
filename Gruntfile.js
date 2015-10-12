module.exports = function(grunt) {

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),

    // Compiles our Sass
    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'assets/css/origin.css': 'assets/scss/origin.scss'
        }
      }
    },

    // Build tooling

    watch: {
      sass: {
        files: ['assets/scss/*.scss', 'assets/scss/**/*.scss', 'assets/scss/**/**/*.scss'],
        tasks: ['sass']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: '_site',
        config: '_config.yml'
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '_site/*.*',
            '_site/**/*.*',
            '_site/**/**/*.*',
            '_site/**/**/**/*.*',
            '_site/**/**/**/**/*.*',
            '_site/**/**/**/**/**/*.*'
          ]
        },
        options: {
          proxy: "localhost:4000/origin/"
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:fac/origin.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-sass');

  // Generate and format the CSS
  grunt.registerTask('default', ['browserSync', 'sass', 'jekyll']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll', 'buildcontrol:pages']);
};
