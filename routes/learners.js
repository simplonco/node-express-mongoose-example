const express = require('express');

const Learner = require('../models/learners.js');

const router = express.Router();

router.get('/learners', (req, res) => {
  Learner.find((error, learners) => {
    console.log(learners);
    res.render('learners/list', { learners });
  });
});

module.exports = router;
