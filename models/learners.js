const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const learnerSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model('Learner', learnerSchema);
