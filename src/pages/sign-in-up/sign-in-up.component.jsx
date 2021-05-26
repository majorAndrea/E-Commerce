import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./sign-in-up.styles.css";

const SignInUp = () => {
  return (
    <Container as="article">
      <Row className="margin-up">
        <Col xs={12} md={6}>
          <SignIn />
        </Col>
        <Col xs={12} md={6}>
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInUp;
