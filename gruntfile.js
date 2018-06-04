module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8000/tests/index.html'
                    ]
                }
            }
        },
        rsids_pa11y: { // Accessibility testing, via ~ http://pa11y.org/
            test: {
                options: { // Task-specific options go here.
                    // screenCapture: './_pa11y-screen-capture.png',
                    standard: 'WCAG2AA', // Or 'WCAG2AAA'
                    timeout: 5000,
                    wait: 500,
                    rootElement: 'body', // Was: '#cookieNotice',
                    verifyPage: 'id="cookieNotice"' // Not supported?
                },
                url: [ 'http://localhost:8000/tests/data.html' ]
                //, file: [ 'array of files, globbing permitted' ]
            }
        },
        strip_code: {

            src: {
                src: 'src/cookie.notice.js',
                dest: 'dist/cookie.notice.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                report: 'gzip',
                screwIE8: true
            },
            build: {
                src: 'dist/cookie.notice.js',
                dest: 'dist/cookie.notice.min.js'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.loadNpmTasks('grunt-rsids-pa11y');

    // Default task(s).
    grunt.registerTask('default', [ 'test', 'strip_code', 'uglify' ]);
    grunt.registerTask('test', [ 'connect', 'qunit', 'rsids_pa11y' ]);

};
