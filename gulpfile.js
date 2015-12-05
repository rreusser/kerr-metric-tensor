var gulp = require('gulp')
var mdEq = require('gulp-markdown-equations')
var tap = require('gulp-tap')
var filter = require('gulp-filter')
var latex = require('gulp-latex')
var pdftocairo = require('gulp-pdftocairo')
var spawn = require('gulp-spawn')

gulp.task('mdtex', function () {
  var texFilter = filter('*.tex', {restore: true})
  var mdFilter = filter('*.md')

  // Instantiate the transform and set some defaults:
  var eqSub = mdEq({
    defaults: {
      display: { margin: '1pt' },
      inline: {margin: '1pt'}
    }
  })

  return gulp.src('*.mdtex')
    .pipe(eqSub)

    // Separate the equations:
    .pipe(texFilter)

    // Render the equations to pdf:
    .pipe(latex())

    // Convert the pdf equations to png:
    .pipe(pdftocairo({format: 'png'}))

    // Trim whitespace:
    .pipe(spawn({
      cmd: 'convert',
      args: ['-', '-trim', '+repage', '-']
    }))

    // Send them to the images folder:
    .pipe(gulp.dest('images'))

    // Match the output images up with the markdown input so that we can use the resulting
    // metadata to construct html that replaces the original equations:
    .pipe(tap(function (file) {
      eqSub.complete(file, function (cb) {
        var img = '<img alt="' + this.alt + '" valign="middle" src="' + this.path + '" width="' + this.width / 2 + '" height="' + this.height / 2 + '">'
        this.display ? cb('<p align="center">' + img + '</p>') : cb(img)
      })
    }))

    // Grab the original markdown file that's now complete:
    .pipe(texFilter.restore).pipe(mdFilter)

    // Output in the current directory:
    .pipe(gulp.dest('./'))
})
