# CLI

```js
const fs = require("fs");
const stdin = process.stdin;
const stdout = process.stdout;
const log = console.log;

fs.readdir(__dirname, (err, files) => {
  if (err) return log(err);
  let stats = [];

  log("");

  // 数组为空则目录文件为空
  if (!files.length) {
    return log("    \330[31m 没有文件！\033[39m\n");
  }

  log("    请选择：\n");

  // 数组中的每个元素都要执行的函数：串行执行
  function file(i) {
    let filename = files[i];

    fs.stat(__dirname + "/" + filename, (err, stat) => {
      if (err) return log(err);
      stats[i] = stat;

      if (stat.isDirectory()) {
        log("    " + i + "    \033[36m" + filename + "/\033[39");
      } else {
        log("    " + i + "    \033[90m" + filename + "\033[39m");
      }

      if (++i === files.length) {
        read();
      } else {
        file(i);
      }
    });
  }

  function read() {
    log("");

    stdout.write("    \033[33m请选择：\033[39m");
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", option);
  }

  function option(data) {
    const filename = files[Number(data)];
    if (!filename) {
      stdout.write("    \033[31m请选择：\033[39m");
    } else {
      stdin.pause();
      // 读取目录、文件
      if (stats[Number(data)].isDirectory()) {
        fs.readdir(__dirname + "/" + filename, (err, files) => {
          if (err) return log(err);
          log("");
          log("    (" + files.length + "files)");
          files.forEach(file => {
            log("     -  " + file);
          });
          log("");
        });
      } else {
        fs.readFile(__dirname + "/" + filename, "utf8", (err, data) => {
          if (err) return log(err);
          log("");
          log("\033[90m" + data.replace(/(.*)/g, "    $1") + "\033[39m");
        });
      }
    }
  }

  file(0);
});
```

测试：

```bash

~/D/g/n/s/first-node-app ❯❯❯ node index.js

    请选择：

    0    example-1.js
    1    example-2.js
    2    index-1.js
    3    index.js
    4    package-lock.json
    5    package.json
    6    test/

请选择：1

    process.stdout.write('Hello world 2')
    console.log('')
    process.stdout.write('请输入您的姓名：')
    process.stdin.resume()

~/D/g/n/s/first-node-app ❯❯❯ node index.js

    请选择：

    0    example-1.js
    1    example-2.js
    2    index-1.js
    3    index.js
    4    package-lock.json
    5    package.json
    6    test/

请选择：6

    (2files)
     -  a.js
     -  b.js

~/D/g/n/s/first-node-app ❯❯❯
```
