const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile SCSS into CSS
function compileSass() {
  return src("css/*.scss") // source folder
    .pipe(sass().on("error", sass.logError)) // compile & handle errors
    .pipe(dest("css")); // output folder
}

// Watch for changes
function watchFiles() {
  watch("css/*.scss", compileSass);
}

// Default task
exports.default = series(compileSass, watchFiles);
