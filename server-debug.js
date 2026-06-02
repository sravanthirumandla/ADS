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
  const dirs = [__dirname, path.join(__dirname, 'vectorfont-studio'), path.join(__dirname, 'vectorstudio')];
  let idx = 0;

  function tryServe() {
    if (idx >= dirs.length) {
      console.log('404:', req.url);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    let filePath = path.join(dirs[idx], req.url === '/' ? 'index.html' : req.url);
    console.log('Trying:', filePath);
    fs.stat(filePath, (err, stats) => {
      if (err || !stats) { console.log('Not found:', err ? err.code : 'no stats'); idx++; tryServe(); return; }
      if (stats.isDirectory()) filePath = path.join(filePath, 'index.html');
      const ext = path.extname(filePath);
      fs.readFile(filePath, (err2, data) => {
        if (err2) { console.log('Read error:', err2.code); idx++; tryServe(); return; }
        console.log('Serving:', filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
  }

  tryServe();
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
