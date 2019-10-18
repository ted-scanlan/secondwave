const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,

});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
