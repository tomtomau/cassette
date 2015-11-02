var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
  return gulp.src('src/cassette.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'cassette.js'
    }))
    .pipe(gulp.dest('dist'))
    ;
});

gulp.task('watch', ['typescript'], function () {
  gulp.watch('src/*.ts', ['typescript']);
});