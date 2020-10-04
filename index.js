/*
  Incredibly simple Node.js and Express application server for serving static assets.
  Given as an example from the React Router documentation (along with examples
  using nginx and Apache):
  - https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const spa = __dirname + '/spa/dist';
console.log(__dirname)
// serve static assets normally
app.use(express.static(spa));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  console.log(__dirname)
  console.log(spa)
  response.sendFile(path.resolve(spa, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);