// requirements
var gulp = require("gulp");
var babel = require("gulp-babel");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var notify = require("gulp-notify");
// var plumber = require('gulp-plumber');
// var gutil = require("gulp-util");

// config
var paths = {
  src: {
    pug: "src/**/*.pug",
    babel: "src/js/**/*.js",
    sass: "src/scss/**/*.scss"
  },
  dest: {
    html: "docs",
    js: "docs/js",
    css: "docs/css"
  }
};
var browsers = "> 1%, last 2 versions, IE >= 9, Firefox ESR"

// tasks

gulp.task("pug", function () {
  return gulp.src(paths.src.pug)
    .pipe(pug())
    .on('error', notify.onError({
      message: "Pug error: <%= error.message %>",
      title: "Pug error"
    }))
    .pipe(gulp.dest(paths.dest.html))
    .pipe(notify({
      title: "Success",
      message: "Compiled Pug file to HTML: <%= file.relative %>"
    }));
});

gulp.task("babel", function () {
  return gulp.src(paths.src.babel)
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [
        ["env", {
          "targets": {
            "browsers": browsers
          }
        }]
      ]
    }))
    .on('error', notify.onError({
      message: "Babel error: <%= error.message %>",
      title: "Babel error"
    }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest.js))
    .pipe(notify({
      title: "Success",
      message: "Compiled Babel file to JS: <%= file.relative %>"
    }));
});

gulp.task("sass", function() {
  return gulp.src(paths.src.sass)
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', notify.onError({
      message: "Sass error: <%= error.message %>",
      title: "Sass error"
    }))
    // .pipe(sourcemaps.write('.'))
    .pipe(autoprefixer({
      env: browsers
    }))
    .pipe(gulp.dest(paths.dest.css))
    // .pipe(livereload(server))
    .pipe(notify({
      title: "Success",
      message: "Compiled Sass file to CSS: <%= file.relative %>"
    }));
});

gulp.task("watch", function() {
  gulp.watch(paths.src.pug, ["pug"]);
  gulp.watch(paths.src.babel, ["babel"]);
  gulp.watch(paths.src.sass, ["sass"]);
});

gulp.task("all", ["pug", "babel", "sass"]);

gulp.task("default", ["all", "watch"]);
