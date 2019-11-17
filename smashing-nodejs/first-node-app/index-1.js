const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  if (err) return console.log(err)

  console.log('');

  // 数组为空则目录文件为空
  if (!files.length) {
    return console.log('    \330[31m 没有文件！\033[39m\n');
  }

  console.log('    请选择：\n');

  // 数组中的每个元素都要执行的函数：串行执行
  function file(i) {
    var filename = files[i];

    // 读取文件或目录的元数据
    fs.stat(__dirname + '/' + filename, (err, stat) => {
      if (err) return console.log(err)
      if (stat.isDirectory()) {
        console.log('    '+i+'    \033[36m' + filename + '/\033[39');
      } else {
        console.log('    '+i+'    \033[90m' + filename + '\033[39m');
      }

      i++;
      if (i === files.length) {
        console.log('');
        process.stdout.write('    \033[33m请选择：\033[39m');
        // 等待用户输入
        process.stdin.resume();
        // 设置流编码
        process.stdin.setEncoding('utf8');
      } else {
        file(i);
      }
    })
  }
  file(0);
});