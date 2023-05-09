const si = require("systeminformation");

const valueObject = {
  cpu: "manufacturer, brand, cores",
  osInfo: "*",
};

si.get(valueObject).then((data) => console.log("自定义获取", data));

// si.getAllData().then((data) => console.log("getAllData", data));

// si.getStaticData().then((data) => console.log("getStaticData", data));

// promises style - new since version 3
// si.cpu()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

si.graphics().then((data) => console.log("graphics", data));

si.system().then((data) => console.log("system", data));

// si.uuid().then((data) => console.log("uuid", data));

// si.bios().then((data) => console.log("bios", data));

// si.mem().then((data) => console.log("mem", data));

// si.diskLayout().then((data) => console.log("diskLayout", data));

si.networkInterfaces("default").then((data) =>
  console.log("networkInterfaces", data)
);

// si.networkConnections().then((data) => console.log("networkConnections", data));

si.diskLayout().then((data) => console.log("diskLayout", data));

// si.blockDevices().then((data) => console.log("blockDevices", data));

si.fsSize().then((data) => console.log("fsSize", data));
