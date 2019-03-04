import http from 'http';
import config from './config';
import app from './webapp';

import { connect } from 'mongoose';
connect(process.env.MONGODB_URI, {useNewUrlParser: true});
// Create an HTTP server and listen on the configured port
let server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server listening on :' + config.port);
});