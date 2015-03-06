var gulp = require('gulp');
var foreach = require('gulp-foreach');
var path = require('path');
var consolidate = require('gulp-consolidate');
var ejs = require('ejs');
var lodash = require('lodash');
var fs = require('fs');









// gulp.src('assets/insert/**').for






// gulp.task('html', function() {
//   return gulp.src('assets/insert/**/*')
//     .pipe(foreach(function(stream, file) {
//       console.log(stream);
//       // return gulp.src(
//       //      path.basename(file.path) + '/**/*',
//       //      { cwd: 'recipe/' }
//       //   )
//       //   .pipe(zip(name + '.zip'));
//     }))
//     .pipe(gulp.dest('build'));
// });






// 
// gulp.task('comp', function(){
//   var topHtml;
//   fs.readFileSync('./assets/insert/UXD/ID001_top_UXD.html', function(err, data){
//       if (err) return console.error(err);
//       console.log(data);
//       topHtml = data;
//   });
//
//   // console.log(topHtml);
//   var options = {
//     top: topHtml,
//     under: 'under'
//   };
//   gulp.src('assets/main/*.html')
//     .pipe(consolidate('lodash', options))
//     // .pipe(rename({ basename:'sample' }))
//     .pipe(gulp.dest('build/')); // サンプルHTMLの吐き出し先を指定
// });
