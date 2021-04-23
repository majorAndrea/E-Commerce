import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledFooter } from "./footer.styles.jsx";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col>Footer</Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
