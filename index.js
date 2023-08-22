const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nandaha:Murakami2023@tech.ecnfova.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

const app = express();

// Set up routes
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
