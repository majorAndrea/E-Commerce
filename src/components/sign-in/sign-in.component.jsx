import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  signInWithGoogle,
  signInWithEmail,
} from "../../redux/user/user.actions.js";
import {
  CustomAlertContext,
  DEFAULT_VALUES,
} from "../../providers/custom-alert/custom-alert.provider";

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { setAlertDetails } = useContext(CustomAlertContext);

  useEffect(() => {
    return () => setAlertDetails({ ...DEFAULT_VALUES });
  }, [setAlertDetails]);

  const validate = (type, data) => {
    switch (type) {
      case "password":
        if (data.length) {
          return true;
        } else {
          throw new Error("Password is required!");
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

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const { email, password } = userCredentials;
      validate("password", password);
      validate("email", email);
      signInWithEmail({ email, password });
      setUserCredentials({
        email: "",
        password: "",
      });
    } catch (e) {
      setAlertDetails({
        display: true,
        title: "Attention!",
        message: `${e}`,
        variant: "danger",
      });
      setUserCredentials({
        email: "",
        password: "",
      });
    }
  };

  const handleClick = () => {
    signInWithGoogle();
  };

  return (
    <Card>
      <Card.Body id="in-card-body">
        <Card.Title>
          <h2>Sign In</h2>
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="in-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  email: e.target.value,
                })
              }
              value={userCredentials.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="in-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  password: e.target.value,
                })
              }
              value={userCredentials.password}
            />
          </Form.Group>

          <Button variant="success" type="submit" block>
            Sign In
          </Button>

          <Button variant="primary" type="button" block onClick={handleClick}>
            Sign In with Google
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  signInWithEmail: (emailAndPassword) =>
    dispatch(signInWithEmail(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
