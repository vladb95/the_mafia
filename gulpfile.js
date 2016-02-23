var gulp=require('gulp'),
    concatCss=require('gulp-concat-css'),
    concat=require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    notify = require("gulp-notify");

var includes=[
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-route/angular-route.min.js',
  'bower_components/angular-materialize/src/angular-materialize.js',
  'bower_components/angular-cookie/angular-cookie.js',
  'bower_components/materialize/bin/materialize.js',
];
var styles=[
  'stylesheet/*.css',
  'bower_components/angular-materialize/css/*.css',
  'bower_components/materialize/bin/materialize.css',
];
var application=[
  'app/game/gameModule.js',
  'app/main/appModule.js',
  'app/main/appConfig.js',
  'app/main/mainController.js',
  'app/game/gamersService.js',
  'app/game/createGameController.js',
  'app/game/gamersController.js',
  'app/game/rolesController.js',
  'app/game/ingameController.js',
  'app/game/gameService.js',
  'app/game/rolesService.js',
  'app/game/timerFilter.js'
];

gulp.task('application',function(){
  gulp.src(application)
  .pipe(jsmin())
  .pipe(notify("Found file: <%= file.relative %>!"))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('includes',function(){
  gulp.src(includes)
  .pipe(notify("Found file: <%= file.relative %>!"))
  .pipe(jsmin())
  .pipe(concat('includes.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('styles',function(){
  gulp.src(styles)
  .pipe(notify("Found file: <%= file.relative %>!"))
  .pipe(concatCss('bundle.css'))
  .pipe(gulp.dest('css'));
});

gulp.task('watch',function(){
  gulp.watch('app/**/*.js',['application']);
  gulp.watch('stylesheet/*.css',['styles']);
});
