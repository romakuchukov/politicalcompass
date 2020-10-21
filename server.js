var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    port = process.env.PORT || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);
  var extension = uri.substring(uri.lastIndexOf('.') + 1);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, 'binary', function(err, file) {
      if(err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(err + '\n');
        response.end();
        return;
      }

      if(extension === 'css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
      } else {
        response.writeHead(200);
      }

      response.write(file, 'binary');
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');
