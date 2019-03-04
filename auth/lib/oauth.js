'use strict';

import { post, get } from 'superagent';
import { createFromOAuth } from '../model';

const authorize = (req) => {

  let code = req.query.code;


  // exchange the code or a token
  return post('https://www.googleapis.com/oauth2/v4/token')
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
      return get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
        .set('Authorization', `Bearer ${token}`)
        .then (response => {
          let user = response.body;
          return user;
        });
    })
    .then(googleUser => {
      return createFromOAuth(googleUser);
    })
    .then (user => {
      return user.generateToken();
    })
    .catch(error=>error);
};



export default {authorize};