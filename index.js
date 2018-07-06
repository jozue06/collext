let http = require('http');
let config = require('./config');

// Create Express web app
let app = require('./webapp');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
// Create an HTTP server and listen on the configured port
let server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server listening on :' + config.port);
});
