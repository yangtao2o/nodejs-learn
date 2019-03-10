const mysql = require('mysql')

// 创建连接对象
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'myblog'
})

// 连接
connection.connect()

// 执行 sql 语句
const sql = 'select * from users;'

connection.query(sql, (err, result) => {
  if(err) {
    console.log('Error: ', err)
    return
  }
  console.log(result)
})

// 关闭连接
connection.end()