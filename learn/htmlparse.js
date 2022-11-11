const fs = require("fs");
const { XMLParser } = require("fast-xml-parser");

const parsingOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  allowBooleanAttributes: true,
  alwaysCreateTextNode: true,
  htmlEntities: true,
  ignorePiTags: true,
  leadingZeros: false,
  numParseOptions: {
    hex: false,
    leadingZeros: false,
  },
};

const parser = new XMLParser(parsingOptions);

const xml = fs.readFileSync("./test.html").toString();
const filterXml = xml.replace(/<head(([\s\S])*?)<\/head>/, "<head></head>");
const content = parser.parse(filterXml);
fs.writeFileSync(
  "/Users/apple/Desktop/test/content.json",
  JSON.stringify(content)
);
console.log("Finished!!!");
