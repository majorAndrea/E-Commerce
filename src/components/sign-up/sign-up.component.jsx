import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { signUpStart } from "../../redux/user/user.actions.js";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validate(type, data) {
    switch (type) {
      case "username":
      case "displayName":
        if (data.length >= 3 && data.length <= 16) {
          return true;
        } else {
          throw new Error("Username must be between 3 and 16 characters!");
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
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailPattern.test(data)) {
          return true;
        } else {
          throw new Error("Invalid email address!");
        }
      default:
        throw new Error("Unknow type validator!");
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { email, password, confirm_password, displayName } = this.state;
    try {
      this.validate("username", displayName);
      this.validate("email", email);
      this.validate("password", [password, confirm_password]);
      signUpStart({ email, password, displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>Sign Up</h2>
          </Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="up-username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter an username"
                name="displayName"
                onChange={this.handleChange}
                value={this.state.displayName}
                required
              />
            </Form.Group>

            <Form.Group controlId="up-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
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
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
            </Form.Group>

            <Form.Group controlId="up-confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                onChange={this.handleChange}
                value={this.state.confirm_password}
                required
              />
            </Form.Group>

            <Form.Group controlId="up-checkbox">
              <Form.Check type="checkbox" label="I like this checkbox" />
            </Form.Group>

            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (user) => dispatch(signUpStart(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
