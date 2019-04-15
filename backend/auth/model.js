'use strict';

import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { verify, sign } from 'jsonwebtoken';

const UserSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true},
	stripeStatus: {type: Number, required: true, default: 0}
});

UserSchema.pre('save', function(next) {
	hash(this.password,10)
	.then(hashedPassword => {
		this.password = hashedPassword;
		next();
	})
	.catch( error => {throw error;} );
});

UserSchema.statics.createFromOAuth = function(incoming) {
	
	if ( ! incoming || ! incoming.email ) {
		return Promise.reject('VALIDATION ERROR: missing username/email or password ');
	}
	return this.findOne({email:incoming.email})
		.then(user => {
			if ( ! user ) { throw new Error ('User Not Found'); }
			return user;
		})
		.catch( error => {
			let username = incoming.email;
			let password = 'none';
			return this.create({
				username: username,
				password: password,
				email: incoming.email,
			});
		});

};

UserSchema.statics.authenticate = function(auth) {
	let query = {username:auth.username};
	return this.findOne(query)
		.then(user => user && user.comparePassword(auth.password))
		.catch(error => error);
};

UserSchema.statics.authorize = function(token) {
	let parsedToken = verify(token, process.env.SECRET);
	let query = {_id:parsedToken.id};
	return this.findOne(query)
		.then(user => {
			return user;
		})
		.catch(error => error);
};

UserSchema.methods.comparePassword = function(password) {
	return compare(password, this.password)
		.then(valid => valid ? this : null);
};

UserSchema.methods.generateToken = function() {
	return sign( {id:this._id}, process.env.SECRET);
};

export default model('users', UserSchema);