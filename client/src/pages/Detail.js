import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.authors}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {book.description}
              </p>
            </article>
          </Col>
          <Col size="md-2 md-offset-1">
            <img src={book.image}></img>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
          <Col size="md-2">
            <Link to="/Saved">← Back to Saved</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
