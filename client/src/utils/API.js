import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getSearchedBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title + "&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o");
  }
};

// * `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

// {
//   "kind": "books#volumes",
//   "totalItems": 1488,
//   "items": [
//   {
//   "kind": "books#volume",
//   "id": "OlCHcjX0RT4C",
//   "etag": "NEefJfu2Wlo",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/OlCHcjX0RT4C",
//   "volumeInfo": {
//   "title": "The Hobbit",
//   "authors": [
//   "J.R.R. Tolkien"
//   ],
//   "publisher": "Houghton Mifflin Harcourt",
//   "publishedDate": "2012-11-08",
//   "description": "This lavish gift edition of J.R.R. Tolkien's classic features cover art, illustrations, and watercolor paintings by the artist Alan Lee. Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum. Written for J.R.R. Tolkien's own children, The Hobbit has sold many millions of copies worldwide and established itself as a modern classic.",
//   "industryIdentifiers": [
//   {
//   "type": "ISBN_13",
//   "identifier": "9780544115552"
//   },
//   {
//   "type": "ISBN_10",
//   "identifier": "0544115554"
//   }
//   ],