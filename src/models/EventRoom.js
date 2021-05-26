const mongoose = require('mongoose');

const EventRoomSchema = new mongoose.Schema({
  name: String,
  capacity: Number
})

module.exports = mongoose.model('EventRoom', EventRoomSchema);