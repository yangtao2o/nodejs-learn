const net = require('net')

let count = 0,
  users = {}

const server = net.createServer(function(conn) {
  let nickname;

  conn.setEncoding('utf8')
  conn.write(
    '\n > 欢迎访问 \033[92mNode-Chat\033[39m!'
  + '\n > ' + count + '个其他用户已连接'
  + '\n > 请输入你的用户名并回车：'
  )

  count++

  conn.on('data', function(data) {
    data = data.replace('\r\n', '')
    console.log(data);

    if(!nickname) {
      if(users[data]) {
        conn.write('\033[93m> 昵称已被使用，请重试：\033[39m ');
        return;
      } else {
        nickname = data
        users[nickname] = conn
        console.log('users: ', conn)
        broadcast('\033[90m > ' + nickname + ' 上线了\033[39m\n');
      }
    } else {
      broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
    }
  })

  conn.on('close', function() {
    count--
    delete users[nickname]
    broadcast('\033[90m > ' + nickname + ' 下线了\033[39m\n');
  })
  // 向每一个用户发送信息
  function broadcast (msg, exceptMyself) {
    for (let i in users) {
      if(!exceptMyself || i != nickname) {
        users[i].write(msg)
      }
    }
  }
})
server.listen(3000, function() {
  console.log('\033[96m  server listening on *: 3000\033[39m')
})