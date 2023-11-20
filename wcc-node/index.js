const fs = require("fs");
const http = require("http");
const url = require("url");
//Files
// const md = fs.readFileSync("./read-me.md", "utf-8");
// console.log(md);
// const textOut = `look!:${md}. \n Created on ${Date.now()} `;
// fs.writeFileSync("./outPut.txt", textOut);

//Non-blocking
// fs.readFile("./outPut.txt", "utf8", (err, res) => {
//   console.log(111, res);
// });
// console.log("will read file");

//server
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/overview" || pathName === "/") {
    res.end("This is the overview");
  } else if (pathName === "product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-word",
    });
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(3001, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
