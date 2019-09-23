const fs = require("fs");
const path = require("path");

// function copy(src, dst) {
//     fs.createReadStream(dst, fs.createWriteStream(src));
// }

// function main(argv) {
//     copy(argv[0], argv[1]);
// }

// main(process.argv.slice(2));

// const bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])
// console.log({bin})

// fs.readFile('/', (err, data) => {
//   if(err) {
//     return new Error(err)
//   }
//   console.log({data})
// })

const cache = {};

function store(key, value) {
  cache[path.normalize(key)] = value;
}

store("foo/bar", 1);
store("foo//baz//../bar", 2);
// console.log({cache})

// 将传入的多个路径拼接为标准路径
console.log(path.join("/bar", "foo", "../baz")); // /bar/baz

// 根据不同文件扩展名做不同操作
console.log(path.extname("bar/foo.js")); // .js

// 递归算法
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// 遍历算法
/**
 * 目录是一个树状结构，在遍历时一般使用深度优先+先序遍历算法。
 * 深度优先，意味着到达一个节点后，首先接着遍历子节点而不是邻居节点。
 * 先序遍历，意味着首次到达了某节点就算遍历完成，而不是最后一次返回某节点才算数。
 **/

// 同步遍历
function travel(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const pathname = path.join(dir, file);
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback);
    } else {
      callback(pathname);
    }
  });
}

// travel('/Users/yangtao/Documents/GitHub/nodejs-learn/cnodejs/03-7days-file', function(pathname) {
//   console.log(pathname)
// })

// 异步遍历
function travel(dir, callback, finish) {
  fs.readdir(dir, function(err, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[i]);

        fs.stat(pathname, function(err, stats) {
          if (stats.isDirectory()) {
            travel(pathname, callback, function() {
              next(i + 1);
            });
          } else {
            callback(pathname, function() {
              next(i + 1);
            });
          }
        });
      } else {
        finish && finish();
      }
    })(0);
  });
}
