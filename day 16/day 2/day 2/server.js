const http = require("http");
const fs = require("fs");

/**
 * create
 * update
 * delete
 * get one
 */
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/user") {
    const readfile = fs.readFileSync("input.json", "utf-8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(readfile);
  } else if (req.method === "POST" && req.url === "/user") {
  } else res.end("Hello world");
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
