const express = require('express');

const Learner = require('../models/learners.js');

const router = express.Router();

// Afficher tous les learners
router.get('/', (req, res) => {
  Learner.find((error, learners) => {
    res.render('learners/list', { learners });
  });
});

// Afficher le formulaire pour ajouter un learner
router.get('/new', (req, res) => {
  res.render('learners/new');
});

// Ajouter un learner dans la db à partir des données du formulaire
router.post('/create', (req, res) => {
  const newLearner = new Learner(req.body);
  newLearner.save((error, learner) => {
    res.redirect('/learners');
  });
});

// Afficher un learner
router.get('/:id', (req, res) => {
  Learner.findById(req.params.id, (error, learner) => {
    res.render('learners/learner', { learner });
  });
});

// Supprimer un learner
router.get('/:id/delete', (req, res) => {
  Learner.findByIdAndRemove(req.params.id, (error, learner) => {
    res.redirect('/learners');
  });
});

module.exports = router;
