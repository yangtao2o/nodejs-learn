/**
 * 打开文件
 * fs.open(path, flags[, mode], callback)
 */ 


var fs = require('fs');
// console.log('准备打开文件！');
// fs.open('input.txt', 'r+', function(err, fd) {
//   if(err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功！');
// });

/**
 * 获取文件信息
 * fs.stat(path, callback)
 */

// fs.stat('I:/learning-dev/nodejs-learn/src/fs-01.js', function(err, stats) {
//   console.log(stats.isFile()); //true
// })


console.log('准备打开文件！');
fs.stat('input.txt', function(err, stats) {
  if(err) {
    return console.error(err);
  }
  console.log(stats);
  console.log('读取文件信息成功');

  // 检测
  console.log('是否为文件(isFile)？' + stats.isFile());
  console.log('是否为目录(isDirectory)？' + stats.isDirectory());
  
})