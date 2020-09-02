import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import AlertSave from "../components/AlertSave";
// import SaveModal from "../components/SaveModal";
import { render } from "react-dom";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  const [show, setShow] = useState(false);
  // const [show, setShow] = useState(true);

  const handleShow = () => setShow(true);

  // Load all books and store them with setBooks
  useEffect(() => {
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Saves a book to the database with a given id, then reloads books from the db
  function saveBook(id) {
    // Use the id to find the book you're referencing
    var book = books.filter(x => x._id === id);
    book = book[0];
    // Pass that book to api.saveBook
  API.saveBook({
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors[0],
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail,
    link: book.volumeInfo.previewLink

  })
    // .then(render(<AlertSave />))
    // .then(handleShow())
    .then(res => console.log("response", res))
    .catch(err => console.log(err));
  }


  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    API.getSearchedBooks({
      title: formObject.title
    })
    .then(res => {
      console.log(res);
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setBooks(res.data.items);

    })
        .catch(err => console.log(err));
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-12 s-12">
            <Jumbotron>
              <h1 style={{ color: "green" }}>React Google Books Search</h1>
              <h2 style={{ color: "orange" }}>Search for and Save Books of Interest</h2>
            </Jumbotron>
            <h3><span style={{ color: "blue" }}>Book</span> Search</h3>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder='Search by Book Title (required, e.g. "The Great Gatsby")'
              />

              <FormBtn
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md 12 s-12">
          <h3>Results</h3>
          {books.length ? (
            <List>
              {/* <SaveModal /> */}
                {books.map(book => (
                  <ListItem key={book._id}>
                      <strong>
                        {book.volumeInfo.title}, by {book.volumeInfo.authors}
                      </strong>
                    <SaveBtn onClick={() => {
                      saveBook(book._id);
                      // handleShow();
                      }} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h4 style={{ color: "red", fontStyle: "italic" }}>No Results to Display</h4>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
