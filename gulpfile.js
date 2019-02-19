const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass");

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function watchFiles() {
  gulp.watch("./scss/**/*", processSass);
  gulp.watch("./js/**/*", browserSyncReload);
  gulp.watch("./index.html", browserSyncReload);
}

function processSass() {
  return gulp
    .src("./scss/**/main.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

function build() {
  return gulp
    .src("./scss/**/main.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css/"));
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.sass = processSass;
exports.watch = watch;
exports.build = build;
exports.default = watch;
