// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const booksSchema = new Schema({
  id: { default: 1 },
  title: { type: String },
  description: { type: String },
  year: { type: Number },
  quantity: { type: Number },
  imageURL: { type: String },
});

module.exports = Books;
