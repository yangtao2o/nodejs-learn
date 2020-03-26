const boxen = require("boxen");

console.log(boxen("Hello World", { padding: 1, borderColor: "yellow" }));

console.log(
  boxen("I LOVE YOU", {
    padding: 1,
    margin: 1,
    borderStyle: "classic",
    borderColor: "red",
    backgroundColor: "magenta"
  })
);
