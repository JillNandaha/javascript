const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

// About route
router.get('/about', (req, res) => {
  res.send('About us');
});

// Contact route
router.get('/contact', (req, res) => {
  res.send('Contact us');
});

module.exports = router;
