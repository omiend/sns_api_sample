var gulp = require("gulp");
var gutil = require("gulp-util");
var webserver = require('gulp-webserver');
var typescript = require("gulp-typescript");
var runSequence = require("run-sequence");

gulp.task("default", function() {

  runSequence(
    "ts",
    ["ts:watch", "webserver"],
    function(){
      gutil.log(gutil.colors.yellow("watching Start"));
      gutil.log(gutil.colors.yellow("let's go to localhost:8000"));
    }
  );
});


gulp.task("webserver", function(){
  return gulp.src('app')
    .pipe(webserver());
});


var tsProject = typescript.createProject({
  noExternalResolve: true
});

gulp.task("ts", function(){
  return gulp.src(['app/**/*.ts', 'typings/**/*.ts'], {base: 'app'})
    .pipe(typescript(tsProject))
    .pipe(gulp.dest('app'));
});


gulp.task("ts:watch", function(){
  return gulp.watch("app/**/*.ts", ["ts"]);
});
