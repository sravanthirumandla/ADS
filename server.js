const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const dirs = [__dirname, path.join(__dirname, 'vectorfont-studio')];
  let idx = 0;

  function tryServe() {
    if (idx >= dirs.length) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    let filePath = path.join(dirs[idx], req.url === '/' ? 'index.html' : req.url);
    fs.stat(filePath, (err, stats) => {
      if (err || !stats) { idx++; tryServe(); return; }
      if (stats.isDirectory()) filePath = path.join(filePath, 'index.html');
      const ext = path.extname(filePath);
      fs.readFile(filePath, (err2, data) => {
        if (err2) { idx++; tryServe(); return; }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
  }

  tryServe();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
