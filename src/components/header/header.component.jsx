import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartDropDownContainer from "../cart-dropdown/cart-dropdown.container.jsx";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import "./header.styles.css";

const Header = ({ currentUser }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-margin-bottom"
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
            <div className="user-nav-controls">
              {currentUser ? (
                <Nav.Item>
                  <Navbar.Text>
                    Welcome Back,
                    <span
                      className="user-display-name"
                      onClick={() => auth.signOut()}
                    >
                      {currentUser.displayName.split(" ")[0]}
                    </span>
                  </Navbar.Text>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </Nav.Item>
              )}
              <Nav.Item>
                <CartDropDownContainer />
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
