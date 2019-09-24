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
  console.log('写入完成')
})

writerStream.on('error', err => {
  console.error(err.stack)
})

console.log('END!!!')

// 输出>>>
// END!!!
// 写入完成