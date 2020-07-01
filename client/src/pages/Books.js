import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { render } from "react-dom";

// class Books extends Component {


function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // state = {
  //   searchRes: [],
  //   query: "",
  //   books: []
  // };

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    // console.log("event.target", event.target);
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
    console.log("formObject", formObject);
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Search Button clicked");
    console.log("event.target.value 2", event.target.value);

    API.getSearchedBooks({
      title: formObject.title
    })
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log("Response:", res);
      console.log(res.data.items);
      setBooks(res.data.items);
      console.log(books);

    })
        .catch(err => console.log(err));

    // if (formObject.title && formObject.author) {
    //   API.saveBook({
    //     title: formObject.title,
    //     authors: formObject.authors,
    //     description: formObject.description
    //   })
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  // render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12 s-12">
            <Jumbotron>
              <h1 style={{ color: "green" }}>React Google Books Search</h1>
              <h2 style={{ color: "orange" }}>Search for and Save Books of Interest</h2>
            </Jumbotron>
            <h3>Book Search</h3>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder='Search by Book Title (required, e.g. "The Great Gatsby")'
              />

              <FormBtn
                // disabled={!(formObject.authors && formObject.title)}
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
                {books.map(book => (
            // console.log(books);
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.volumeInfo.title}, by {book.volumeInfo.authors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                    <SaveBtn onClick={() => console.log("Book saved!")} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
      // }
  }


export default Books;
