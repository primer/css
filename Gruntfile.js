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
          'css/primer.css': 'scss/primer.scss'
        }
      }
    },

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      dist: {
        src: 'css/*.css'
      },
      docs: {
        src: '_site/*.css'
      }
    },

    // Runs CSS reporting
    parker: {
      options: {
        metrics: [
          'TotalStylesheets',
          'TotalStylesheetSize',
          'TotalRules',
          'TotalSelectors',
          'TotalIdentifiers',
          'TotalDeclarations',
          'SelectorsPerRule',
          'IdentifiersPerSelector',
          'SpecificityPerSelector',
          'TopSelectorSpecificity',
          'TopSelectorSpecificitySelector',
          'TotalIdSelectors',
          'TotalUniqueColours',
          'TotalImportantKeywords',
          'TotalMediaQueries'
        ],
        file: "css/.primer-stats.md",
        usePackage: true
      },
      src: [
        'css/*.css'
      ]
    },

    // Build tooling

    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs/docs.scss'],
        tasks: ['sass', 'postcss', 'parker']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: '_site',
        config: '_config.yml'
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
          remote: 'git@github.com:primer/primer.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-parker');
  grunt.loadNpmTasks('grunt-sass');

  // Generate and format the CSS
  grunt.registerTask('default', ['sass', 'jekyll', 'postcss', 'parker']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll', 'postcss:docs', 'buildcontrol:pages']);
};
