/**
 * 从流中读取数据
 */

const fs = require('fs')
let data = ''

// 创建可读写流
const readerStream = fs.createReadStream('test/input.txt')

// 设置编码格式
readerStream.setEncoding('UTF8')

// 处理流事件
readerStream.on('data', chunk => {
  data += chunk
})
readerStream.on('end', () => {
  console.log(data)
})
readerStream.on('error', err => {
  console.error(err.stack)
})
console.log('END!!!')

// 输出>>>
// END!!!
// www.runoob.com