'use strict';

import { post, get } from 'superagent';
import createFromOAuth from '../model';

const authorize = (req) => {
  let code = req.query.code;

  // exchange the code or a token
  return post(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${code}`)
    .type('form')
    .send({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let googleToken = response.body;
      return googleToken;
    })
    .then(googleUser => {
      return createFromOAuth(googleUser);
    })
    .then (user => {
      return user.generateToken();
    })
    .catch(error => {
      console.log("HERE ERROR",error);
      error});
};



export default {authorize};