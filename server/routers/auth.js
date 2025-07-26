// Express route for admin login
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Admin login');
});

module.exports = router;
