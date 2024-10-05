import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("I am service A!");
});
server.listen(80, () => {
  console.log("Server running at http://localhost:80/");
});
