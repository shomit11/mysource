const TASK = 'build-hard';
const core = require('../gulp-core');

core.gulp.task(TASK, done => {
  core.mainHeading(TASK, 'Starting build');
  core.runSequence(
    'eslint-hard',
    'build-clean',
    'tslint-hard',
    'styl-2-css-hard',
    'styl-2-css-stream-hard',
    'ts-2-js-hard',
    'copy',
    done);
});
