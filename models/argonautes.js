const mongoose = require("mongoose");

const argonauteSchema = new mongoose.Schema({
  name: String
})

const Argonaute = mongoose.model('Argonaute', argonauteSchema);

module.exports = Argonaute;
