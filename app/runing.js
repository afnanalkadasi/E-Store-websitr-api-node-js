

var app = require('../server');
var http = require('http');
var port = normalizePort(process.env.PORT || '22000');
app.set('port', port);


var server = http.createServer(app);



server.listen(port);

// Normalize a port into a number, string, or false.
 

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
