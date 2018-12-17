
// 写入流
var fs = require('fs');
var data = '菜鸟教程官网：www.runoob.com';

// 创建一个可以写入的流，并写入到文件中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

writerStream.on('finish', function() {
  console.log('写入完成！');
});

writerStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('Over!!!');

