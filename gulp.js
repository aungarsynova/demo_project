// reference the required packages to make task naming wrk
var gulp = require('gulp');
var sass = required('gulp-sass');

gulp.task: ('sass', fucntion () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});