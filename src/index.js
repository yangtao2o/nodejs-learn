var server = require('./server-02');
var router = require('./router-01');

server.start(router.route);

// filename:  I:\learning-dev\nodejs-learn\src\index.js
console.log('filename: ', __filename); 

// dirname:  I:\learning-dev\nodejs-learn\src
console.log('dirname: ', __dirname);

console.info('程序开始执行！');

// var counter = new Array(100);
// console.log('计数： %d', counter);
// console.time('获取数据');
// for (let i = 0; i < counter.length; i++) {
//   counter[i] = i;
// }
// console.dir(counter);
console.info('Over!!!');


