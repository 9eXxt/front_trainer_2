import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPackage from 'gulp-sass';
import sass from 'sass';
import cache from 'gulp-cached';
import rename from "gulp-rename";
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import dependents from 'gulp-dependents';

const sassCompiler = sassPackage(sass);

// const gulp        = require('gulp');
// const browserSync = require('browser-sync');
// const sass        = require('gulp-sass')(require('sass'));
// const cache = require('gulp-cached');
// const rename = require("gulp-rename");
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer'); 

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

//compile sass
gulp.task('style', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(cache('styles'))
            .pipe(dependents())
            .pipe(sassCompiler())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest("src/css"))
            .pipe(cleanCSS({compability: 'ie8'}))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest("src/css"))
            .pipe(browserSync.stream());
});

//file watcher
gulp.task('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("style"))
    gulp.watch("src/*.html").on("change", browserSync.reload)
});

gulp.task('default', gulp.parallel('watch', 'server', 'style'));