import React, { useState } from "react";
import { connect } from "react-redux";
import { setCheckoutPersonalInfo } from "../../../redux/checkout/checkout.actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { selectCheckoutInfoPersonal } from "../../../redux/checkout/checkout.selectors";
import { motion } from "framer-motion";

const CheckoutStepOne = ({
  setCheckoutPersonalInfo,
  currentUser,
  checkoutPersonalInfo,
}) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [autoFilling, setAutoFilling] = useState(
    !!checkoutPersonalInfo.email.length
  );

  const [userPersonalInfo, setUserPersonalInfo] = useState({
    ...checkoutPersonalInfo,
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    e.preventDefault();
    history.push("/checkout/steps/two");
    setCheckoutPersonalInfo(userPersonalInfo);
  };

  const handleSwitch = ({ target: { checked } }) => {
    setAutoFilling(checked);
    if (checked) {
      setUserPersonalInfo({
        firstname:
          checkoutPersonalInfo?.firstname ||
          currentUser?.displayName.split(" ")[0] ||
          "",
        lastname:
          checkoutPersonalInfo?.lastname ||
          currentUser?.displayName.split(" ")[1] ||
          "",
        email: checkoutPersonalInfo?.email || currentUser?.email || "",
      });
      return;
    }
    setUserPersonalInfo({
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  return (
    <Col xs="12" md="6" lg="5">
      <motion.div
        initial={{ x: "+100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, stiffness: 150 }}
        className="m-0 p-0"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col xs={12}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  value={userPersonalInfo.email}
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
                  value={userPersonalInfo.firstname}
                  placeholder="Your first name"
                  onChange={({ target: { value } }) =>
                    setUserPersonalInfo({
                      ...userPersonalInfo,
                      firstname: value,
                    })
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
                  value={userPersonalInfo.lastname}
                  placeholder="Your last name"
                  onChange={({ target: { value } }) =>
                    setUserPersonalInfo({
                      ...userPersonalInfo,
                      lastname: value,
                    })
                  }
                />
                <Form.Control.Feedback>OK!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Your last name is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <Button className="d-block" variant="success" type="submit">
              Continue
            </Button>
          </div>
          <hr />
        </Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={autoFilling}
          label={
            autoFilling
              ? "Disable auto-filling of personal info"
              : "Enable auto-filling of personal info"
          }
          className="align-self-center"
          onChange={handleSwitch}
          disabled={!currentUser}
        />
      </motion.div>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCheckoutPersonalInfo: (userPersonalInfo) =>
    dispatch(setCheckoutPersonalInfo(userPersonalInfo)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  checkoutPersonalInfo: selectCheckoutInfoPersonal,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutStepOne);
