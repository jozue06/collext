// let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
// let options = {
//   client_id: "910868958603-nq90rpf6943b5s04jaggao8brvn3g5m3.apps.googleusercontent.com",
//   redirect_uri: 'https://collext-beta.herokuapp.com/oauth',
//   scope: 'email openid profile',
//   prompt: 'consent',
//   response_type: 'code'
// }
// let QueryString = Object.keys(options).map((key, i) => {
//   return `${key}=` + encodeURIComponent(options[key]);
// }).join("&");
// let authURL = `${googleURL}?${QueryString}`;
// //  $('.google').attr("href",`${authURL}`);
import React, { Component, Fragment } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}
 
export default class LogIn extends Component {
 
    render(){ 
        return (
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        )
    }
}