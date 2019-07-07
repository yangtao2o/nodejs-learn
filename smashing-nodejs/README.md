# 《了不起的 Node.js：将JavaScript进行到底》

> 英文名：《SMASHING Node.js: JavaScript Everywhere》

### TCP

文件目录： `./tcp-chat/index.js`

#### Telnet

客户端1：

```bash
➜  tcp-chat git:(master) ✗ telnet 127.0.0.1 3000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

 > 欢迎访问 Node-Chat!
 > 0个其他用户已连接
 > 请输入你的用户名并回车：Yangtao
 > Yangtao 上线了
 > Wangwu 上线了
 > Lisi 上线了
Hello, Wang and Li.
 > Wangwu: Hi, yang
 > Lisi: Hi, yang
 > Wangwu: Sorry, I have to leave.
 > Wangwu 下线了
 > Wangwu2 上线了
```

客户端2：

```bash
➜  tcp-chat git:(master) ✗ telnet 127.0.0.1 3000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

 > 欢迎访问 Node-Chat!
 > 1个其他用户已连接
 > 请输入你的用户名并回车：Wangwu
 > Wangwu 上线了
 > Lisi 上线了
 > Yangtao: Hello, Wang and Li.
Hi, yang
 > Lisi: Hi, yang
Sorry, I have to leave.   
^[^]
telnet> q
Connection closed.

# 重新连接
➜  tcp-chat git:(master) ✗ telnet 127.0.0.1 3000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

 > 欢迎访问 Node-Chat!
 > 2个其他用户已连接
 > 请输入你的用户名并回车：Yangtao
> 昵称已被使用，请重试： Lisi
> 昵称已被使用，请重试： Wangwu2
 > Wangwu2 上线了
```

客户端3：

```bash
➜  tcp-chat git:(master) ✗ telnet 127.0.0.1 3000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

 > 欢迎访问 Node-Chat!
 > 2个其他用户已连接
 > 请输入你的用户名并回车：Lisi
 > Lisi 上线了
 > Yangtao: Hello, Wang and Li.
 > Wangwu: Hi, yang
Hi, yang
 > Wangwu: Sorry, I have to leave.
 > Wangwu 下线了
 > Wangwu2 上线了
```