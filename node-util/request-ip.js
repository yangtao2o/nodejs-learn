const https = require("https");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const { execSync } = require("child_process");

// 同步获取
function getNetIpSync() {
  // 超时时间为2s
  const cmdString = "curl --connect-timeout 2 ifconfig.me/ip";
  let result = "";
  try {
    result = execSync(cmdString, {
      encoding: "utf-8",
      stdio: ["ignore"],
    });
  } catch (error) {
    console.error("Get ifconfig error:" + error.message);
  }
  return result;
}
getNetIpSync();

// 异步获取
async function getNetIp() {
  const cmdStr = "curl ifconfig.me/ip";
  const { error, stdout, stderr } = await exec(cmdStr);
  let ip = "";
  if (error) {
    console.error("Get ifconfig error:" + error);
  } else {
    ip = stdout;
  }
  console.log(ip);
  return ip;
}
getNetIp();

// 网络请求
function getIpFromHttp() {
  const options = {
    hostname: "ifconfig.me",
    port: 443,
    path: "/ip",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`状态码: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}
getIpFromHttp();
