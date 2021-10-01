import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  signInWithGoogle,
  signInWithEmail,
} from "../../redux/user/user.actions.js";
import {
  CustomAlertContext,
  DEFAULT_VALUES,
} from "../../providers/custom-alert/custom-alert.provider";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";
import FormInput from "../form-input/form-input.component.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

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
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={userCredentials.email}
          onChange={(e) =>
            setUserCredentials({
              ...userCredentials,
              email: e.target.value,
            })
          }
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          onChange={(e) =>
            setUserCredentials({
              ...userCredentials,
              password: e.target.value,
            })
          }
          label="password"
          required
        />
        <ButtonsBarContainer>
          <Button variant="dark" type="submit" block>
            Sign In
          </Button>

          <Button
            variant="light"
            type="button"
            block
            onClick={handleClick}
            className="border mt-2"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              size="1x"
              role="link"
              tabIndex="0"
              title="Login with Google"
              className="mr-2"
            />
            Sign In with Google
          </Button>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  signInWithEmail: (emailAndPassword) =>
    dispatch(signInWithEmail(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
