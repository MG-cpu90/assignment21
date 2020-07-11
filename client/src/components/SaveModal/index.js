import "./style.css";
// import React, { Component } from "react";
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";

function SaveModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Added to "Saved" List!</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SaveModal;
