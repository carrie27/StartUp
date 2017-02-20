var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'), // склеивает css
	minifyCss = require('gulp-minify-css'), // минифицирует css
	connect = require('gulp-connect'),
	liveReload = require('gulp-livereload'), // перезагрузка сервера
	rename = require('gulp-rename'), // переименование 
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'); 

// server connect ---------------
	
gulp.task('connect', function() {
 	connect.server({
   	root: 'app',
   	livereload: true
 	});
});

// --- html-----------------
gulp.task('html', function(){
	gulp.src('app/index.html')
	.pipe(connect.reload());
});

//---- css------------------
gulp.task('css', function () {
  	gulp.src('app/scss/style.scss')
  		.pipe(sass())
  		.pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
		.pipe(concatCss('bundle.css'))
	    .pipe(minifyCss())
	    .pipe(rename('bundle.min.css'))
	    .pipe(gulp.dest('app/build'))
	    .pipe(connect.reload());
});

// js --------------
gulp.task('js', function(){
	gulp.src('app/js/*.js')
		.pipe(connect.reload());
});

//---- watch -------------
gulp.task ('watch', function() {
	gulp.watch('app/scss/style.scss', ['css']);
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/js/*.js', ['js']);
});

// --- default ------------
gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);
