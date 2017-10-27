'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('./app/pug/pages/*.pug')
      .pipe($.gp.plumber())
      .pipe($.gp.pug({ pretty: true }))
      .pipe($.gulp.dest('./app'));
  });
};
