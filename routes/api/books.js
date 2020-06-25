const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+intitle:keyes&key=yourAPIKey

// // API Key
// AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o

// maxResults=10

// https://www.googleapis.com/books/v1/volumes?q=title:

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
