let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
let options = {
  client_id: "910868958603-nq90rpf6943b5s04jaggao8brvn3g5m3.apps.googleusercontent.com",
  redirect_uri: 'http://localhost:3331/oauth',
  scope: 'email openid profile',
  prompt: 'consent',
  response_type: 'code'
}
let QueryString = Object.keys(options).map((key, i) => {
  return `${key}=` + encodeURIComponent(options[key]);
}).join("&");
let authURL = `${googleURL}?${QueryString}`;
 $('.google').attr("href",`${authURL}`);