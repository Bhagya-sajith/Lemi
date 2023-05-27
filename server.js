const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route for handling the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Add your login logic here
  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

