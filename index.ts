import * as http from "http";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5000;
const hostname = "0.0.0.0";

const server = http.createServer((req, res) => {
  let filePath;
  let contentType = "text/html";

  if (req.url?.startsWith("/attached_assets/")) {
    filePath = join(__dirname, req.url);
    contentType = "image/png";
  } else {
    filePath = join(__dirname, "index.html");
    contentType = "text/html";
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("File not found");
      return;
    }
    
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-cache");
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Color Sort Puzzle game running at http://${hostname}:${port}/`);
});
