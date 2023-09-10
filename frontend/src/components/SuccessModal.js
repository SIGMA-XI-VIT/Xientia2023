import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../styles/modal.scss';

const SuccessModal = ({ show, closeHandler }) => {
  //const [show, setShow] = useState(false);
  //const closeHandler = () => {setShow(false)};

  return(
  <Modal show={true} onHide={closeHandler} centered>
    <Modal.Header closeButton>
      <Modal.Title>Success!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Your submission has been made!
      <br />
      Good Luck for your presentation!
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeHandler}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
};

export default SuccessModal;
