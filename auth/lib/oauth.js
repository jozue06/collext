'use strict';

let superagent = require('superagent');
let User = require('../model');

const authorize = (req) => {

  let code = req.query.code;


  // exchange the code or a token
  return superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code',
    })
    .then( response => {
      let googleToken = response.body.access_token;
      return googleToken;
    })
  // use the token to get a user
    .then ( token => {
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
        .set('Authorization', `Bearer ${token}`)
        .then (response => {
          let user = response.body;
          return user;
        });
    })
    .then(googleUser => {
      return User.createFromOAuth(googleUser);
    })
    .then (user => {
      return user.generateToken();
    })
    .catch(error=>error);
};



module.exports = {authorize};