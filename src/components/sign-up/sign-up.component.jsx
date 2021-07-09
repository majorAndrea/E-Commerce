import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { signUpStart } from "../../redux/user/user.actions.js";
import {
  CustomAlertContext,
  DEFAULT_VALUES,
} from "../../providers/custom-alert/custom-alert.provider";

const SignUp = ({ signUpStart }) => {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const { setAlertDetails } = useContext(CustomAlertContext);

  useEffect(() => {
    return () => setAlertDetails({ ...DEFAULT_VALUES });
  }, [setAlertDetails]);

  const validate = (type, data) => {
    switch (type) {
      case "username":
      case "displayName":
      case "firstname":
      case "lastname":
        if (data.length >= 3 && data.length <= 16) {
          return true;
        } else {
          throw new Error(
            "Firstname and Lastname must be between 3 and 16 characters!"
          );
        }
      case "password":
        if (Array.isArray(data)) {
          if (data[0] === data[1]) {
            if (data[0].length >= 6 && data[0].length <= 24) {
              return true;
            } else {
              throw new Error("Password must be between 6 and 24 characters!");
            }
          } else {
            throw new Error("Password and Confirm Password don't match!");
          }
        } else {
          throw new Error("Password and Confirm Password are required!");
        }
      case "email":
        const emailPattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailPattern.test(data)) {
          return true;
        } else {
          throw new Error("Invalid email address!");
        }
      default:
        throw new Error("Unknow type validator!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirm_password, firstname, lastname } =
      userDetails;
    const displayName = firstname + " " + lastname;
    try {
      validate("firstname", firstname);
      validate("lastname", lastname);
      validate("email", email);
      validate("password", [password, confirm_password]);
      signUpStart({ email, password, displayName });
      setUserDetails({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (e) {
      setAlertDetails({
        display: true,
        title: "Attention!",
        message: `${e}`,
        variant: "danger",
      });
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>Sign Up</h2>
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="up-firstname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstname: e.target.value })
              }
              value={userDetails.firstname}
              required
            />
          </Form.Group>

          <Form.Group controlId="up-lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastname: e.target.value })
              }
              value={userDetails.lastname}
              required
            />
          </Form.Group>

          <Form.Group controlId="up-email" className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              value={userDetails.email}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="up-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              value={userDetails.password}
              required
            />
          </Form.Group>

          <Form.Group controlId="up-confirm-password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirm_password: e.target.value,
                })
              }
              value={userDetails.confirm_password}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (user) => dispatch(signUpStart(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
