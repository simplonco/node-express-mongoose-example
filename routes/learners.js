const path = require('path');
const express = require('express');
const multer = require('multer');

const Learner = require('../models/learners.js');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, path.resolve('public', 'uploads'));
  },
  filename: (request, file, callback) => {
    callback(null, `${request.body.firstName.toLowerCase()}-${request.body.lastName.toLowerCase()}.${file.originalname.split('.')[1]}`);
  }
});
const upload = multer({ storage });

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
router.post('/create', upload.single('photo'), (req, res) => {
  const newLearner = new Learner(req.body);
  newLearner.photo = `/${req.file.destination.split('/').pop()}/${req.file.filename}`;
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
  Learner.findByIdAndRemove(req.params.id, (error) => {
    res.redirect('/learners');
  });
});

// Afficher le formulaire d'édition d'un learner
router.get('/:id/edit', (req, res) => {
  Learner.findById(req.params.id, (error, learner) => {
    res.render('learners/edit', { learner });
  });
});

// Update un learner à partir des données récupérées du formulaire d'édition
router.post('/:id/edit', (req, res) => {
  Learner.findByIdAndUpdate(req.params.id, req.body, (error) => {
    res.redirect('/learners');
  });
});

module.exports = router;
