const express = require('express');

const learners = require('./routes/learners');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/learners');
});

router.use('/learners', learners);

module.exports = router;
