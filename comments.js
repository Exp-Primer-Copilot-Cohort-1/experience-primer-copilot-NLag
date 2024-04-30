// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

// Path: comments.js
// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Path: comments.js
// Create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

// Path: comments.js
// Create a route to handle comments and return a JSON response
app.get('/comments/json', (req, res) => {
  res.json({ message: 'Comments page' });
});
