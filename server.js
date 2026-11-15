#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app'); // pulls express server from app.js where it is exported
var debug = require('debug')('assignment2:server'); 
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = 3000; // Sets port for the express server.
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app); // creates the express server

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); // Makes the server listen on a specific port so we can send requests.
server.on('error', onError);
server.on('listening', onListening);



// removed normalizePort (useless)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
