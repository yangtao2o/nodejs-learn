/**
 * 写入流
 */

const fs = require('fs')
const data = '我是被测试的一段内容，哈哈哈哈...'

// 创建可写流并导入到 test 目录下的`output.text`
const writerStream = fs.createWriteStream('test/output.text')

// 设置写入内容的编码格式
writerStream.write(data, 'UTF8')

// 标记文件末尾
writerStream.end()

// 处理流事件
writerStream.on('finish', () => {
  console.log('写入完成，开始读取...')
  fs.readFile('test/output.text', (err, data) => {
    if(err) {
      return console.log(err)
    } 
    console.log('读取内容是：', data.toString())
  })
})

// 管道流
const readerStream2 = fs.createReadStream('test/input2.txt')
const writerStream2 = fs.createWriteStream('test/output2.text')

readerStream2.pipe(writerStream2)

writerStream2.on('finish', () => {
  console.log('写入2完成，开始读取...')
  fs.readFile('test/output2.text', (err, data) => {
    if(err) {
      return console.log(err)
    } 
    console.log('读取内容2是：', data.toString())
  })
})

writerStream.on('error', err => {
  console.error(err.stack)
})
writerStream2.on('error', err => {
  console.error(err.stack)
})

console.log('END!!!')

// 输出>>>
// END!!!
// 写入完成，开始读取...
// 写入2完成，开始读取...
// 读取内容是： 我是被测试的一段内容，哈哈哈哈...
// 读取内容2是： You see see you, one day day.