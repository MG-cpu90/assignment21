// Import components and API
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

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


    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 style={{ color: "green" }}>React Google Books Search</h1>
              <h2 style={{ color: "orange" }}>Search for and Save Books of Interest</h2>
            </Jumbotron>
            <h3>Saved <span style={{ color: "blue" }}>Books</span></h3>

            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.authors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
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


export default Saved;
