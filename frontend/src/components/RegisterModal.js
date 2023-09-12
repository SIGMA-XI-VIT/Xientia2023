import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../styles/modal.scss';

const RegisterModal = ({ show, closeHandler }) => {
  //const [show, setShow] = useState(false);
  //const closeHandler = () => {setShow(false)};

  return(
  <Modal show={true} onHide={closeHandler} centered>
    <Modal.Header closeButton>
      <Modal.Title>Success!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Your team has been registered!
      <br />
      Good luck for the event!
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeHandler}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
};

export default RegisterModal;
