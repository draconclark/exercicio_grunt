module.exports = function(grunt) { /*configuracion inicio GRUNT*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' /*archivo final: archivo origen */
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },
        
        

        
    })

    grunt.loadNpmTasks('grunt-contrib-less');/*Aqui metemos el pack plug in que descargamos del less*/


    grunt.loadNpmTasks('grunt-contrib-uglify');





    grunt.registerTask('default', ['less:development'])
    grunt.registerTask('build', ['less:production', 'uglify']);
}