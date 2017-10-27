'use strict';

module.exports = function () {
  $.gulp.task('css', function () {
    return $.gulp.src('./app/styl/styles.styl')
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.stylus())
      .pipe($.gp.autoprefixer())
      .pipe($.gp.rename({ suffix: '.min'}))
      .pipe($.gp.csso())
      .pipe($.gulp.dest('./app/assets/css'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.browserSync.stream());
  }),
  $.gulp.task('cssVendor', function () {
    return $.gulp.src([
      './app/vendor/normalize-css/normalize.css',
      './app/vendor/fullpage.js/dist/jquery.fullpage.min.css',
      './app/vendor/owl.carousel/dist/assets/owl.carousel.min.css'
    ])
    .pipe($.gp.concat('vendor.min.css'))
    .pipe($.gp.csso())
    .pipe($.gulp.dest('./app/assets/css'));
  });
};
