const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

// GET https://www.googleapis.com/books/v1/volumes?q=intitle:flowers&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o

// GET https://www.googleapis.com/books/v1/volumes?q=intitle:flowers&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o


// GET https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=yourAPIKey

// GET https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o



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
