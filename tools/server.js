/**
 * Mock server (Creates on port 8080. In browser, http://localhost:8080
 * Uses 'connect' and 'serveStatic' plugin
 */

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('.')).listen(8080);
console.log("Web Server running at http://localhost:8080/");
