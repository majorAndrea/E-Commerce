import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Container from "react-bootstrap/Container";

const SignInUp = () => {
  return (
    <Container
      as="article"
      className="d-flex justify-content-between align-items-center flex-column justify-content-lg-around flex-lg-row align-items-lg-start"
    >
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default SignInUp;
