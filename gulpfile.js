'use strict';

global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  gp: require('gulp-load-plugins')({lazy: false}),
  pngquant: require('imagemin-pngquant'),
  browserSync: require('browser-sync').create()
};

$.path.task.forEach(function (taskPath) {
  require(taskPath) ();
});

$.gulp.task('build', $.gulp.parallel('pug','css','js','cssVendor','jsVendor'));

$.gulp.task('default', $.gulp.series('build', 'serve'));
