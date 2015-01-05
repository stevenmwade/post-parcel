var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	stylus = require('gulp-stylus');

var paths = {
	js: 'public/app/**/*.js',
	jsDest: 'public/js',
	css: 'public/app/css/src/**/*.styl',
	cssDest: 'public/app/css',
	jade: '**/*.jade'
}

gulp.task('js', function(){
	gulp.src(paths.js)
		.pipe(livereload({ auto: false }));
});

gulp.task('css', function(){
	gulp.src(paths.css)
		.pipe(stylus())
		.pipe(concat('main.css'))
		.pipe(minifycss())
		.pipe(gulp.dest(paths.cssDest))
		.pipe(livereload({ auto: false }));
});

gulp.task('jade', function(){
	gulp.src(paths.jade)
		.pipe(livereload({ auto: false }));
})

gulp.task('watch', function(){
	livereload.listen(35728);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['js', 'css', 'jade']);