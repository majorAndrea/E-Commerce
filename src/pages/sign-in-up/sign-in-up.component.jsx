import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./sign-in-up.styles.css";

const SignInUp = () => {
  return (
    <div>
      <Row as="article" className="margin-up">
        <Col xs={12} md={6} lg={5}>
          <SignIn />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <SignUp />
        </Col>
      </Row>
    </div>
  );
};

export default SignInUp;
