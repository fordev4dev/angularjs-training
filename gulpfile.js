const gulp = require('gulp');
const concat = require('gulp-concat');
const templateCache = require('gulp-angular-templatecache');
const ngConstant = require('gulp-ng-constant');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const clean = require('gulp-clean');

const outDir = 'dist';

const configFile = 'config.json';
const sourcesFavicon = 'app/favicon.ico';

const sourcesIndex = 'app/index.html';
const sourcesHtml = 'app/**/templates/**/*.html';

const outAppJs = 'app.js';
const appJs = [
  'app/app.module.js',
  'app/**/*.module.js',
  '!app/**/*.spec.js',
  'app/**/*.js'
];

const outVendorsJs = 'vendors.js';
const vendorsJs = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-animate/angular-animate.min.js',
  'node_modules/angular-touch/angular-touch.min.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
  'node_modules/angular-busy/dist/angular-busy.min.js'
];

const appCss = 'app/styles/**/*.css';

const outVendorsCss = 'vendors.css';
const vendorsCss = [
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/angular-busy/dist/angular-busy.min.css'
];

gulp.task('config', function () {
  return gulp.src(configFile)
    .pipe(ngConstant({
      name: 'app.config',
      wrap: false
    }))
    .pipe(gulp.dest(outDir));
});

gulp.task('templates', function () {
  return gulp.src(sourcesHtml)
    .pipe(templateCache({
      module: 'app'
    }))
    .pipe(gulp.dest(outDir));
});

gulp.task('vendors-js', function () {
  return gulp.src(vendorsJs)
    .pipe(concat(outVendorsJs))
    .pipe(gulp.dest(outDir));
});

gulp.task('vendors-css', function () {
  return gulp.src(vendorsCss)
    .pipe(concat(outVendorsCss))
    .pipe(gulp.dest(outDir));
});

gulp.task('app-js', function () {
  return gulp.src(appJs)
    .pipe(concat(outAppJs))
    .pipe(gulp.dest(outDir));
});

gulp.task('app-css', function () {
  return gulp.src(appCss)
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(outDir));
});

gulp.task('index', function () {
  return gulp.src(sourcesIndex)
    .pipe(gulp.dest(outDir));
});

gulp.task('favicon', function () {
  return gulp.src(sourcesFavicon)
    .pipe(gulp.dest(outDir));
});

gulp.task('clean', function () {
  return gulp.src(outDir, { read: false })
    .pipe(clean());
});

gulp.task('build', [
  'favicon',
  'index',
  'app-js',
  'app-css',
  'vendors-js',
  'vendors-css',
  'config',
  'templates'
]);

gulp.task('watch', ['build'], function() {
  gulp.watch([configFile], ['config']);
  gulp.watch([sourcesHtml], ['templates']);
  gulp.watch([vendorsJs], ['vendors-js']);
  gulp.watch([vendorsCss], ['vendors-css']);
  gulp.watch([appJs], ['app-js']);
  gulp.watch([appCss], ['app-css']);
  gulp.watch([sourcesIndex], ['index']);
});

gulp.task('default', [
  'watch'
]);
