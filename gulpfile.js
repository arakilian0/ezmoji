var gulp = require('gulp'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    server = require('browser-sync'),
    package = require('./package.json'),
    pipeline = require('readable-stream').pipeline;

var _start,
    _compressez,
    _compressjs,
    _compresscss;

_start = (cb) => {
    server.init(package.config.browserSync);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.html`).on('change', server.reload);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.css`).on('change', server.reload);
    gulp.watch(`${package.config.browserSync.server}**/**/**/**/**/**/**/*.js`).on('change', server.reload);
    cb();
};

_compressez = () => {
    return pipeline(
        gulp.src('ezmoji.js'),
        uglify(),
        rename('ezmoji.min.js'),
        gulp.dest('./')
  );
};

_compressjs = () => {
    return pipeline(
        gulp.src('./assets/js/main.js'),
        uglify(),
        rename('main.min.js'),
        gulp.dest('./assets/js')
    );
};

_compresscss = (cb) => {
    gulp.src('./assets/css/style.css')
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./assets/css'))
    cb()
};

exports.default = _start;
exports.compress = gulp.series(_compresscss, _compressjs, _compressez);
