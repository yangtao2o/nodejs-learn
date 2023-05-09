const os = require("node:os");
const cp = require("node:child_process");

function getMacAddress() {
  let result = "";
  const networkInterfaces = os.networkInterfaces();
  for (var i in networkInterfaces) {
    for (var j in networkInterfaces[i]) {
      if (
        networkInterfaces[i][j]["family"] === "IPv4" &&
        networkInterfaces[i][j]["mac"] !== "00:00:00:00:00:00" &&
        networkInterfaces[i][j]["address"] !== "127.0.0.1"
      ) {
        result = networkInterfaces[i][j]["mac"];
      }
    }
  }
  console.log("Mac address", result); //a6:02:b9:76:93:28
  return result;
}

function getNetIP() {
  const cmdString = "curl ifconfig.me/ip";
  let result = "";
  try {
    result = cp.execSync(cmdString, {
      encoding: "utf-8",
      stdio: ["ignore"],
    });
  } catch (error) {
    console.error("Get ifconfig error:" + error.message);
  }
  console.log("Network IP", result);
  return result;
}

const bucketOS = {
  arch: os.arch(),
  type: os.type(),
  cpuCount: os.cpus().length,
  cpuModel: os.cpus()[0].model,
  platform: os.platform(),
  hostname: os.hostname(),
  release: os.release(),
  version: os.version(),
  totalMem: parseFloat((os.totalmem() / 1024 / 1024).toFixed(2)) + "M",
  mac: getMacAddress(),
  netIP: getNetIP(),
  graphicsCard: function () {},
};

console.log(bucketOS);
