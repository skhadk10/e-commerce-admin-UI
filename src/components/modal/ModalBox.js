import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalBox = ({ show, children, toggleModal }) => {
  return (
    <div>
      <>
        <Modal show={show} onHide={toggleModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ModalBox;
