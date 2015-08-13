var gulp = require('gulp'),
    fs = require("fs"),
    requireDir = require('require-dir');

requireDir('Tasks', { recurse: true });

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('debug', function () {
    console.log(taskConfig);
    console.log(fs);

})