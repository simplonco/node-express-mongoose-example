const express = require('express');

const learners = require('./routes/learners');

const router = express.Router();

// Route principale redirigée vers la liste des learners
router.get('/', (req, res) => {
  res.redirect('/learners');
});

// Import des routes lieés à mes modèles
// prefix, routes
router.use('/learners', learners);

module.exports = router;
