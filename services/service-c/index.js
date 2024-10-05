import http from "http";

const makeHttpRequest = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
        console.log(data);
      });
      res.on("end", () => {
        resolve(data);
      });
      res.on("error", (err) => {
        reject(err);
      });
    });
  });
};

const server = http.createServer(async (req, res) => {
  if (req.url === "/check-other-services") {
    try {
      const [responseA, responseB] = await Promise.all([
        makeHttpRequest("http://example-a-service"),
        makeHttpRequest("http://example-b-service"),
      ]);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(
        `Response from service A: ${responseA}\nResponse from service B: ${responseB}`
      );
      return;
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error: ${error.message}`);
      return;
    }
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("I am service C!");
});

server.listen(80, () => {
  console.log("Server running on port 80");
});
