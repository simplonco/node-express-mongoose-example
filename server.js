const path = require('path');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

// Connexion à la db
mongoose.connect('mongodb://localhost/promo8');

// Moteur de rendu des pages
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

// Localisation des fichiers statiques
app.use(express.static(path.resolve(__dirname, 'public')));

// Logger
app.use(logger('dev'));

// Pour récupérer les données des formulaires via req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Import de mon routeur
app.use(routes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})
