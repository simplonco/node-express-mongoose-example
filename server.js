const path = require('path');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/promo8', () => {
  console.log('MongoDB connection success');
});

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})
