import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CheckoutStepOne = () => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    history.push("/checkout/steps/two");
  };

  return (
    <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="d-block d-sm-flex justify-content-sm-between">
            <Form.Group controlId="formFirstname" className="mr-0 mr-sm-3">
              <Form.Label>First name</Form.Label>
              <Form.Control required placeholder="Your first name" />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Your first name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control required placeholder="Your last name" />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Your last name is required.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit">
          Continue
        </Button>
      </Form>
    </Col>
  );
};

export default CheckoutStepOne;
