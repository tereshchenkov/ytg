'use strict'

module.exports = function () {
  $.gulp.task('clean', function () {
    return $.del('./dist');
  }),

  $.gulp.task('img', function () {
    return $.gulp.src('./app/assets/img/**/*.*')
      .pipe($.gp.imagemin({ use: [$.pngquant]}))
      .pipe($.gulp.dest('./dist/assets/img'))
  }),
  $.gulp.task('dist', function () {
    var htmlDist = $.gulp.src('./app/*.html')
      .pipe($.gulp.dest('./dist'));
    var cssDist = $.gulp.src('./app/assets/css/*.css')
      .pipe($.gulp.dest('./dist/assets/css'));
    var jsDist = $.gulp.src('./app/assets/js/*.js')
      .pipe($.gulp.dest('./dist/assets/js'));
    return htmlDist, cssDist, jsDist;
  }),

  $.gulp.task('public', $.gulp.series('clean', 'img', 'dist'))
}
