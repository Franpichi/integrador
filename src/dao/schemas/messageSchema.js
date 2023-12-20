// dao/schemas/messageSchema.js
const mongoose = require('../mongoose');

const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
});

module.exports = mongoose.model('Message', messageSchema);
