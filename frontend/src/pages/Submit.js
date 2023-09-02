import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import "../styles/submit.scss";

const Submit = (props) => {
  return (
    <>
      <div className="container">
        <div className="submit-container">
          <p className="submitTitle" id="nav5">Submit Your Presentations</p>
          <Form className="form">
            <Form.Label htmlFor="inlineFormInput">Team Name</Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Team Name"
            />
            <Form.Label htmlFor="inlineFormInputGroup">
              Number of Members
            </Form.Label>
            <Form.Control
              id="inlineFormInputGroup"
              placeholder="Enter a number between 1 and 4"
            />
            <Form.Label htmlFor="inlineFormInput">
              Team Leader's E-Mail Address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label htmlFor="inlineFormInput">PPT Link</Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Team Name"
            />
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Form>
        </div>
        <footer id="nav5"></footer>
      </div>
    </>
  );
};

export default Submit;
