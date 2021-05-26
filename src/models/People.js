const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

module.exports = mongoose.model('People', PeopleSchema);