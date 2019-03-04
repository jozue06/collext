
import express from 'express';
// import path from 'path';
import App from "../public/App";
import React from "react";
import dom from "react-dom/server";
import LogIn from '../public/components/Landing';
let router = express.Router();


// GET: /redirect after auth
router.get('/redirect',  (req, res, next) => {
  res.redirect(302,'/notifications/new');
});

// // GET: /   show auth landing
// router.get('/', (req, res) => {
//   res.statusCode = 200;
//   res.statusMessage = 'OK';

//   res.sendFile(path.resolve('public', 'views', 'index.html'))

// });


router.get( "/", ( req, res ) => {
  const jsx = ( <LogIn /> );
  const reactDom = dom.renderToString( jsx );

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate( reactDom ) );
} );

function htmlTemplate( reactDom ) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>React SSR</title>
      </head>
      
      <body>
          <div id="app">${ reactDom }</div>
          <script src="./app.bundle.js"></script>
      </body>
      </html>
  `;
}

export default router;