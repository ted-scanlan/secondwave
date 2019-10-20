const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    headline: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  contact: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,

});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
