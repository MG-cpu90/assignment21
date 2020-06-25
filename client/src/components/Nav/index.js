import React from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

function Nav() {
  return (

  //   <Navbar bg="primary" variant="dark">
  //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //   <Nav className="mr-auto">
  //     <Nav.Link href="#home">Home</Nav.Link>
  //     <Nav.Link href="#features">Features</Nav.Link>
  //     <Nav.Link href="#pricing">Pricing</Nav.Link>
  //   </Nav>
  // </Navbar>

    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "blue" }}
    >
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-link" href="/">
            Search
          </a>
          <a className="nav-link" href="/Saved">
            Saved
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
