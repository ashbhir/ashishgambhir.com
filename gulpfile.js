"use strict"

var gulp    = require("gulp")
,sass       = require("gulp-sass")
,concat     = require("gulp-concat")
;

gulp.task("default", ['sass', 'watch']);

gulp.task('sass',function(){
	gulp.src('./sass/**/*.sass')
	.pipe(sass())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./css'))
});

gulp.task('watch',function(){
	gulp.watch('./sass/**/*.sass',['sass']);
});
