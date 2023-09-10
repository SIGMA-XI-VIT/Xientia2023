import React, { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";
import "../styles/submit.scss";

const Submit = (props) => {
  let [formData, setFormData] = useState({
    teamName: "",
    numberOfMembers: "",
    teamLeaderEmail: "",
    pptLink: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToBackend(formData);

    setFormData({
      teamName: "",
      numberOfMembers: "",
      teamLeaderEmail: "",
      pptLink: "",
    })

  };

  const sendDataToBackend = async (data) => {
    const requestBody = {
      query:
        "mutation SubmitLink($teamName: String, $numberOfMembers: String, $teamLeaderEmail: String, $pptLink: String) { submitLink(teamName: $teamName, numberOfMembers: $numberOfMembers, teamLeaderEmail: $teamLeaderEmail, pptLink: $pptLink) { pptLink } }",
      variables: {
        teamName: data.teamName,
        numberOfMembers: data.numberOfMembers,
        teamLeaderEmail: data.teamLeaderEmail,
        pptLink: data.pptLink,
      },
    };

    try
    {

      fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
    catch(error)
    {
      console.log(error)
    }

  };

  return (
    <>
      <div className="container">
        <div className="submit-container">
          <p className="submitTitle" id="nav5">
            Submit Your Presentations
          </p>
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Label htmlFor="inlineFormInput">Team Name</Form.Label>
            <Form.Control
              value={formData.teamName}
              onChange={handleInputChange}
              className="mb-2"
              id="inlineFormInput"
              placeholder="Team Name"
              type="text"
              name="teamName"
            />
            <Form.Label htmlFor="inlineFormInputGroup">
              Number of Members
            </Form.Label>
            <Form.Control
              id="inlineFormInputGroup"
              value={formData.numberOfMembers}
              onChange={handleInputChange}
              className="mb-2"
              placeholder="Enter a number between 1 and 4"
              type="number"
              name="numberOfMembers"
            />
            <Form.Label htmlFor="inlineFormInput">
              Team Leader's E-Mail Address
            </Form.Label>
            <Form.Control
              value={formData.teamLeaderEmail}
              onChange={handleInputChange}
              type="email"
              placeholder="Enter email"
              name="teamLeaderEmail"
            />
            <Form.Label htmlFor="inlineFormInput">PPT Link</Form.Label>
            <Form.Control
              value={formData.pptLink}
              onChange={handleInputChange}
              className="mb-2"
              id="inlineFormInput"
              placeholder="PPT Link"
              name="pptLink"
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
