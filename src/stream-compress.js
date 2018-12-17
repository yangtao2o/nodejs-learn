var fs = require('fs');
var zlib = require('zlib');

// 将input.txt文件压缩为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');