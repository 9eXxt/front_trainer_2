import gulp from "gulp";
import browserSyncPackage from "browser-sync";
import sassPackage from "gulp-sass";
import * as sassCompiler from "sass";
import cache from "gulp-cached";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";

const { task, src, dest, watch, parallel } = gulp;
const browserSync = browserSyncPackage.create();
const sass = sassPackage(sassCompiler);

// Static server
task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
});

// Compile sass
task("style", function () {
  return (
    src("src/sass/**/*.+(scss|sass)")
      // .pipe(cache('styles'))
      .pipe(
        sass().on("error", function () {
          console.error("Not correct file sass");
          this.emit("end");
        })
      )
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false,
        })
      )
      .pipe(dest("src/css"))
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(dest("src/css"))
      .pipe(browserSync.stream())
  );
});

// File watcher
task("watch", function () {
  watch("src/sass/**/*.+(scss|sass)", parallel("style"));
  watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("copy-inputmask", () => {
  return gulp
    .src([
        "node_modules/inputmask/dist/inputmask.es6.js",
        "node_modules/inputmask/dist/inputmask.js"
      ])
    .pipe(gulp.dest("src/inputmask"));
});

task("default", parallel("watch", "server", "style", "copy-inputmask"));
