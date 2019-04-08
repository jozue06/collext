import cors from 'cors';
import express from 'express';
import bodyparser from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRouter from './auth/router';
import routes from './controllers/notifications';
import notifications from './controllers/notifications';
import config from './notification_config';
import { connect } from 'mongoose';


connect(process.env.MONGODB_URI, {useNewUrlParser: true});

// Create Express web app
let app = express();

// Use morgan for HTTP request logging in dev and prod
if (process.env.NODE_ENV !== 'test') {
	// app.use(morgan('combined'));
}

 

let corsOptions = {
	origin: 'http://localhost:3000',
}
app.use(cors(corsOptions));

// Parse incoming form-encoded HTTP bodies
app.use(cookieParser());

app.use(bodyparser.urlencoded({
	extended: true,
}));
app.use(bodyparser.json());
// Create and manage HTTP sessions for all requests
app.use(session({
	secret: config.secret,
	resave: true,
	saveUninitialized: true,
}));

// Use connect-flash to persist informational messages across redirects
app.use(flash());


// Add CSRF protection for web routes

// app.use(csurf());
// app.use(function(request, response, next) {
//   response.locals.csrftoken = request.csrfToken();
//   next();
// });


app.use('/', routes);
app.use('/notifications', notifications);
app.use(authRouter);


// production error handler
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {},
//   });
// });

app.get('/', (req,res) => {
	res.sendFile(path.resolve('../frontend', 'public', 'index.html'))
})

let server = false;

module.exports = {
	start: (port) => {
		if(!server) {
			server = app.listen(port, (err) => {
				if(err) { throw err; }
				console.log('Server running on', port);
			});
		}
		else {
			console.log('Server is already running');
		}
	},

	stop: () => {
		server.close( () => {
			console.log('Server is now off');
		});
	},
};