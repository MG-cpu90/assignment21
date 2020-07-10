const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String },
  description: String,
  date: { type: Date, default: Date.now },
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
