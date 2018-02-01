const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const server = require('gulp-server-livereload');
const watch = require('gulp-watch');

const paths = {
  sass: {
    src: 'src/**/*.scss',
    dest: 'dist/'
  },
  styles: {
    src: 'src/**/*.css',
    dest: 'dist/'
  },
  scripts: {
    src: ['src/**/*.js', '!src/**/*.min.js'],
    dest: 'dist/'
  },
  extLibs: {
    src: 'src/**/*.min.js',
    dest: 'dist/'
  },
  assets: {
    src: 'src/assets/**',
    dest: 'dist/assets/'
  },
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  }
};

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('sass', () => {
  return gulp.src(paths.sass.src)
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', () => {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('extLibs', () => {
  return gulp.src(paths.extLibs.src)
    .pipe(gulp.dest(paths.extLibs.dest));
});

gulp.task('assets', () => {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest));
});

gulp.task('html', () => {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
});

gulp.task('server', () => {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'styles', 'scripts', 'extLibs', 'assets', 'html')));

gulp.task('watch', () => {
  watch(paths.sass.src, gulp.series('sass'));
  watch(paths.styles.src, gulp.series('styles'));
  watch(paths.scripts.src, gulp.series('scripts'));
  watch(paths.assets.src, gulp.series('assets'));
  watch(paths.html.src, gulp.series('html'));
});

gulp.task('dev', gulp.series('build', gulp.parallel('server', 'watch')));
