const fs = require('fs')

// 阻塞
// 在文件读取完后才执行完程序
const getData = fs.readFileSync('test/input.txt')

console.log(getData.toString())
console.log('阻塞程序运行结束')

// 非阻塞
// 不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能
fs.readFile('input.txt', (err, data) => {
  if(err) {
    return console.error(err)
  }
  console.log(data.toString())
})

console.log('非阻塞程序运行结束')
