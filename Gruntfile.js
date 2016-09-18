module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean:{
			compiledJsFiles:['compiledJsFiles/*'],
			output:['ToBeCleaned/*'],
			unused:{
				src:['ToBeCleaned/test']	
			}
		},
	typescript:{
		seperate:{
			src:'tsFiles/*.ts',
			dest:'compiledJsFiles'
		},
		singleFile:{
			src:'tsFiles/*.ts',
			dest:'compiledJsFiles/common.js'
		}
	},
	jshint:{
		options:{
				ignores:['compiledJsFiles/common.js'],
				reporterOutput:'jsHint.txt'
		},
		files:['compiledJsFiles/*.js']
	},
	   uglify: {
            development: {
              files: [{
                  expand: true,
                  src: 'jsFiles/*.js',
                  dest: 'compressedFiles/'
              }] 

            },
            options: {
               //angle: false,
                compress: {
                    drop_console: true
                },  
               //eautify: true,
            },
        }, 

	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('default','clean');
	grunt.registerTask('tsToJs','typescript');
	grunt.registerTask('analyze','jshint');
	grunt.registerTask('compress','uglify');

};
