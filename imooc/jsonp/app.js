const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const url = req.url;
  const query = querystring.parse(url.split("?")[1]);
  const { callback } = query;
  const data = {
    name: "Yang Min",
    age: "8"
  }
  res.end(`${callback}('${JSON.stringify(data)}')`);
});

server.listen(8000);