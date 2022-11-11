const sizeOf = require("image-size");
const url = require("url");
const http = require("http");

const dimensions = sizeOf("./test.png");
console.log(dimensions.width, dimensions.height);

const imgUrl = "http://my-amazing-website.com/image.jpeg";
const options = url.parse(imgUrl);

http.get(options, function (response) {
  const chunks = [];
  response
    .on("data", function (chunk) {
      chunks.push(chunk);
    })
    .on("end", function () {
      const buffer = Buffer.concat(chunks);
      console.log(sizeOf(buffer));
    });
});
