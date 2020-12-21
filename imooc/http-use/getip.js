const http = require('http')
const os = require('os')

/**
 * 获取本机IP
 * @return {String} 返回本机IP
 */
///获取本机ip///
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (let devName in interfaces) {
    const iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address
      }
    }
  }
}

/**
 * 获取公网IP
 * @param {Function} fn 异步获取结果后的回调函数
 */
function getPublicIP(fn) {
  http.get(
    'http://ip.taobao.com/service/getIpInfo.php?ip=myip',
    function (req, res) {
      typeof fn === 'function' && fn(res)
      console.info(res)
    }
  )
}

module.exports = {
  getLocalIP: getLocalIP,
  getPublicIP: getPublicIP,
}
