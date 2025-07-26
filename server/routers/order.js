// Express route for order
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Order received');
});

module.exports = router;
