const express = require('express');

const learners = require('./routes/learners');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.use(learners);

module.exports = router;
