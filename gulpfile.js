var gulp = require('gulp'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    server = require('browser-sync'),
    package = require('./package.json'),
    pipeline = require('readable-stream').pipeline;

var _start,
    _compress;

_start = (cb) => {
    server.init(package.config.browserSync);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.html`).on('change', server.reload);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.css`).on('change', server.reload);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.js`).on('change', server.reload);
    cb();
};

_compress = () => {
    return pipeline(
        gulp.src(`${package.config.name.domain}${package.config.name.ext}`),
        uglify(),
        rename(`${package.config.name.domain}${package.config.name.prod}${package.config.name.ext}`),
        gulp.dest('./')
  );
};

exports.default = _start;
exports.compress = _compress;
