const express = require('express');

const router = express.Router();

router.get('/learners', (req, res) => {
  res.send('List learners');
});

module.exports = router;
