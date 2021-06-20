import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserCheckoutPersonalInfo } from "../../../redux/user/user.actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CheckoutStepOne = ({ setUserCheckoutPersonalInfo }) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [userPersonalInfo, setUserPersonalInfo] = useState({
    firstname: null,
    lastname: null,
    email: null,
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    history.push("/checkout/steps/two");
    setUserCheckoutPersonalInfo(userPersonalInfo);
  };

  return (
    <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={({ target: { value } }) =>
                  setUserPersonalInfo({ ...userPersonalInfo, email: value })
                }
              />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="d-block d-sm-flex justify-content-sm-between">
            <Form.Group controlId="formFirstname" className="mr-0 mr-sm-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Your first name"
                onChange={({ target: { value } }) =>
                  setUserPersonalInfo({ ...userPersonalInfo, firstname: value })
                }
              />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Your first name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Your last name"
                onChange={({ target: { value } }) =>
                  setUserPersonalInfo({ ...userPersonalInfo, lastname: value })
                }
              />
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

const mapDispatchToProps = (dispatch) => ({
  setUserCheckoutPersonalInfo: (userPersonalInfo) =>
    dispatch(setUserCheckoutPersonalInfo(userPersonalInfo)),
});

export default connect(null, mapDispatchToProps)(CheckoutStepOne);
