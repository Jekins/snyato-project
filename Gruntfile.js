module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: {
            src: {
                blocks: 'src/blocks',
                less: 'src/less',
            },
            dest: {
                css: 'web/css',
            }
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> | Project base: Jekins.ru */\n'
            },
            css: {
                src: '<%= path.dest.css %>/includes/*.css',
                dest: '<%= path.dest.css %>/concat/main.css'
            }
        },
        less: {
            options: {
                compress: true
            },
            files: {
                expand: true,
                cwd: '<%= path.src.less %>',
                src: ['*.less'],
                dest: '<%= path.dest.css %>/includes/',
                ext: '.css'
            }
        },
        clean: {
            css: {
                src: [
                    "<%= path.dest.css %>/includes/",
                    "<%= path.dest.css %>/concat/"
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 30 versions', 'ie 8', 'ie 9']
            },
            files: {
                src: '<%= path.dest.css %>/concat/*.css',
                dest: '<%= path.dest.css %>/main.css'
            }
        },
        watch: {
            options: {
                spawn: false,
                //livereload: true
            },
            less: {
                files: [
                    '<%= path.src.less %>/**/*.less',
                    '<%= path.src.blocks %>/**/*.less',
                ],
                tasks: [
                    'less',
                    'concat:css',
                    'autoprefixer',
                    'clean:css'
                ]
            }
        },
        browserSync: {
            bsFiles: {
                src: 'web/**/*'
            },
            options: {
                watchTask: true,
                    
                server: {
                    baseDir: "./web"
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer');


    grunt.registerTask('default', ['less', 'concat:css', 'autoprefixer', 'clean:css']);
    grunt.registerTask('serve', ['default', 'browserSync', 'watch']);

};