import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  signInWithGoogle,
  signInWithEmail,
} from "../../redux/user/user.actions.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInWithEmail } = this.props;
    signInWithEmail({ email, password });
    this.setState({
      email: "",
      password: "",
    });
  };

  handleClick = () => {
    const { signInWithGoogle } = this.props;
    signInWithGoogle();
  };

  render() {
    return (
      <Card>
        <Card.Body id="in-card-body">
          <Card.Title>
            <h2>Sign In</h2>
          </Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="in-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
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
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>

            <Form.Group controlId="in-checkbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Sign In
            </Button>

            <Button
              variant="primary"
              type="button"
              block
              onClick={this.handleClick}
            >
              Sign In with Google
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  signInWithEmail: (emailAndPassword) =>
    dispatch(signInWithEmail(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
