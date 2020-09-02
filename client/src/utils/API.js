// Import AXIOS
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
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Retrieves the books searched for by making an API call
    getSearchedBooks: function(title) {
        console.log("TITLE:", title);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title.title + "&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o");
    }
};