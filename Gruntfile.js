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
		htmlhint:{
			templates:{
				options:{
					'attr-lower-case':true,
					'attr-value-not-empty':true,
					'tag-pair':true,
					'tag-self-close':true,
					'tagname-lowercase':true,
					'id-class-value':true,
					'id-class-unique':true,
					'src-not-empty':true,
					'img-alt-required':true
				},
				src:['templates/*.html']
			}
		},

		htmlmin:{
			dev:{
				options:{
				removeEmptyAttributes:true,
				removeEmptyElements : true,
				removeRedundantAttributes : true,
				removeComments : true,
				removeOptionslTags :true
			},
			files:{
				'templates/bundle.min.html':['templates/first.html', 'templates/second.html']
			}
			}
			
		},
		less:{	
		development:{
			options:{
				cleancss:true,
				compresscss:false
			},
			files:[
				{
					expand:true,
					cwd:'Content/',
					src:'less/*.less',
					dest:'css/',
					ext:'.css',
					extDot:'last'
				}
			]
		}},
		csslint:{
			strict:{
				options:{},
				src:['Content/css/*.css']
			},
			laxed:{
				options:{
					csslintrc:'csslintrules.json'
					
				},
				src:['Content/css/*.css']
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	grunt.registerTask('default','clean');
		grunt.registerTask('tsToJs','typescript');
		grunt.registerTask('analyze','jshint');
		grunt.registerTask('compress','uglify');
		grunt.registerTask('htmlanalyze','htmlhint');
	 grunt.registerTask('htmlminification','htmlmin');
	 grunt.registerTask('lesstocss','less');
	 grunt.registerTask('cssverify', 'csslint');
	 grunt.registerTask('cssminify', 'cssmin');
};
