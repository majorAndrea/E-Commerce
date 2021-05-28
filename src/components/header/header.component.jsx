import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartDropDownContainer from "../cart-dropdown/cart-dropdown.container.jsx";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { logoutUser } from "../../redux/user/user.actions.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  UserNavControls,
  NavBarStyles,
  UserDisplayName,
  UserButtons,
  LogoutButton,
} from "./header.styles";

const Header = ({ currentUser, logoutUser }) => {
  return (
    <NavBarStyles
      as={Navbar}
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>eCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" as="section">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/">
              Best Sellers
            </Link>
            <Link className="nav-link" to="/">
              Tech
            </Link>
            <Link className="nav-link" to="/">
              Fashion
            </Link>
          </Nav>
          <Nav className="ml-auto" as="section">
            <UserNavControls>
              {currentUser ? (
                <Nav.Item>
                  <Navbar.Text>
                    <UserDisplayName>
                      {currentUser.displayName.split(" ")[0]}
                    </UserDisplayName>
                  </Navbar.Text>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </Nav.Item>
              )}

              <UserButtons as={Nav.Item}>
                {currentUser ? (
                  <LogoutButton
                    as={Button}
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => logoutUser()}
                    className="logout-btn"
                  >
                    Logout
                  </LogoutButton>
                ) : null}

                <CartDropDownContainer />
              </UserButtons>
            </UserNavControls>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBarStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
