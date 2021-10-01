import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { signUpStart } from "../../redux/user/user.actions.js";
import {
  CustomAlertContext,
  DEFAULT_VALUES,
} from "../../providers/custom-alert/custom-alert.provider";
import FormInput from "../form-input/form-input.component.jsx";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

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
    <SignUpContainer className="mt-3 mt-lg-0 mb-4 mb-lg-0">
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstname"
          value={userDetails.firstname}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              firstname: e.target.value,
            })
          }
          label="Firstname"
          required
        />
        <FormInput
          type="text"
          name="lastname"
          value={userDetails.lastname}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              lastname: e.target.value,
            })
          }
          label="Lastname"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            })
          }
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userDetails.confirm_password}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              confirm_password: e.target.value,
            })
          }
          label="Confirm Password"
          required
        />
        <Button type="submit" variant="dark" block>
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (user) => dispatch(signUpStart(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
