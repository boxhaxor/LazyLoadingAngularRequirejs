var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

var cssFiles = ['css/*.sass'];
var jsFiles = ['js/*.js', 'js/main.js'];
var jsLibraries = ['lib/*.js'];
var jsLibraryMapFiles = ['lib/*.map'];
var htmlFiles = ['index.html'];
var templateFiles = ['templates/*.html'];
var watchFiles = htmlFiles.concat(htmlFiles).concat(jsFiles).concat(cssFiles).concat(templateFiles);

var outputFolder = 'dist';

// Lint JS
gulp.task('lint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('views', function(){
	return gulp.src(htmlFiles)
		.pipe(gulp.dest(outputFolder));
});

gulp.task('templates', function(){
	return gulp.src(templateFiles)
		.pipe(gulp.dest(outputFolder+'/templates'));
});

gulp.task('images', function(){
	return gulp.src('images/*.*')
		.pipe(gulp.dest(outputFolder+'/images'));
});

// Concat & Minify JS
gulp.task('minify', function(){
	var files = jsLibraries.concat(jsFiles);
	return gulp.src(files)
		.pipe(concat('all.js'))
		.pipe(gulp.dest(outputFolder))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(outputFolder));
});

gulp.task('mapfiles', function(){
	return gulp.src(jsLibraryMapFiles)
		.pipe(gulp.dest(outputFolder));
});

// Concat & Minify JS
gulp.task('css', function(){
	return gulp.src(cssFiles)
		.pipe(sass())
		.pipe(concat('all.css'))
		.pipe(gulp.dest(outputFolder));
});


// Watch Our Files
gulp.task('watch', function() {
  gulp.watch(watchFiles, ['lint', 'minify', 'views', 'css', 'templates']);
});

gulp.task('default', ['lint','minify', 'watch', 'views', 'css', 'templates', 'mapfiles', 'images']);