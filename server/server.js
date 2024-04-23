// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy database to store user data
let users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Here, you would typically validate the data received from the client

  // For simplicity, just pushing the user data into the dummy database
  users.push({ firstName, lastName, email, password });

  // Sending a dummy response indicating success
  res.status(200).json({ message: 'Signup successful' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
