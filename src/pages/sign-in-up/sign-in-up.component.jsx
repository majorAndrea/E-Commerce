import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SignInUp = () => {
  return (
    <Container as="article" className="mt-3">
      <Row>
        <Col xs={12} md={6}>
          <SignIn />
        </Col>
        <Col xs={12} md={6} className="mt-4 mt-md-0 mb-4 mb-md-0">
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInUp;
