'use strict';

module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server:'./app'
    });
    $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch(['./app/blocks/**/*.styl',
                  './app/styl/**/*.styl'], $.gulp.series('css'));
    $.gulp.watch('./app/blocks/**/*.js', $.gulp.series('js'));
    $.gulp.watch('./app/*.html').on('change', $.browserSync.reload);
  });
};
