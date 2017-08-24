const express = require('express');

const Learner = require('../models/learners.js');

const router = express.Router();

router.get('/', (req, res) => {
  Learner.find((error, learners) => {
    res.render('learners/list', { learners });
  });
});

router.get('/new', (req, res) => {
  res.render('learners/new');
});

router.post('/create', (req, res) => {
  const newLearner = new Learner(req.body);
  newLearner.save((error, learner) => {
    res.redirect('/learners');
  });
});

router.get('/:id', (req, res) => {
  Learner.findById(req.params.id, (error, learner) => {
    res.render('learners/learner', { learner });
  });
});

router.get('/:id/delete', (req, res) => {
  Learner.findByIdAndRemove(req.params.id, (error, learner) => {
    res.redirect('/learners');
  });
});

module.exports = router;
