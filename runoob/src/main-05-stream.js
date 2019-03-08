/**
 * Stream 是一个抽象接口
 * Readable -> 可读操作
 * Writable -> 可写操作 
 * Duplex -> 可读可写操作
 * Transform -> 操作被写入数据，然后读出结果
 * 
 * 所有的 Stream 对象都是 EventEmitter 的实例
 * data -> 当有数据可读时触发
 * end -> 没有更多的数据可读时触发
 * error -> 在接受和写入过程中发生错误时触发
 * finish -> 所有数据已被写入底层系统时触发
 */

// 从流中读取数据
var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end', function() {
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('Over!');