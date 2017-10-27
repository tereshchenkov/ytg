'use strict';

module.exports = function () {
  $.gulp.task('js', function () {
    return $.gulp.src('./app/blocks/**/*.js')
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('scripts.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest('./app/assets/js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.browserSync.stream());
  }),
  $.gulp.task('jsVendor', function () {
    return $.gulp.src([
      './app/vendor/jquery/dist/jquery.min.js',
      './app/vendor/fullpage.js/dist/jquery.fullpage.min.js',
      './app/vendor/owl.carousel/dist/owl.carousel.min.js'
    ])
    .pipe($.gp.concat('vendor.min.js'))
    .pipe($.gp.uglify())
    .pipe($.gulp.dest('./app/assets/js'));
  });
};
