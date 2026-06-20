const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Jenkins Pipeline! Update console v1...now pipeline will trigger auto..\n');
}).listen(3000, () => console.log('Running on port 3000'));
