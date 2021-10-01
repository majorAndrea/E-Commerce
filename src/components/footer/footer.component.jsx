import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faMapSigns,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import {
  StyledFooter,
  DarkerBackground,
  SocialIconsContainer,
} from "./footer.styles.jsx";

const Footer = () => {
  return (
    <StyledFooter>
      <DarkerBackground>
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6} className="py-4 text-center text-md-left">
              Get connected with us on social networks!
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-around justify-content-md-between text-secondary mb-4 mb-md-0"
              as={SocialIconsContainer}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                role="link"
                tabIndex="0"
                title="Visit Facebook page"
              />
              <FontAwesomeIcon
                icon={faGoogle}
                size="2x"
                role="link"
                tabIndex="0"
                title="Visit Google page"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                role="link"
                tabIndex="0"
                title="Visit Instagram page"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                role="link"
                tabIndex="0"
                title="Visit LinkedIn page"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                role="link"
                tabIndex="0"
                title="Visit Twitter page"
              />
            </Col>
          </Row>
        </Container>
      </DarkerBackground>
      <Container className="mt-4 mb-3">
        <Row as="section">
          <Col md={6} lg={3}>
            <h4 className="mb-0 mb-0">About Us</h4>
            <hr className="bg-secondary mb-3 w-50" />
            <p className="font-weight-light w-75">
              Vestibulum sit amet orci eu felis volutpat gravida vel nec dolor.
              Nunc eget lorem a lectus sodales sagittis. Suspendisse congue elit
              eu nibh placerat fermentum.{" "}
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h4 className="mb-0">Products</h4>
            <hr className="bg-secondary mb-3 w-50" />
            <ul className="list-unstyled foot-desc">
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Tablets
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Chairs
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Pants
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Computers
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5>Useful links</h5>
            <hr className="bg-secondary mb-3 w-50" />

            <ul className="list-unstyled foot-desc">
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Checkout
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Become an Affiliate
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Shipping Rates
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-success">
                  Help
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5>Contacts</h5>
            <hr className="bg-secondary mb-3 w-50" />

            <ul className="list-unstyled foot-desc">
              <li className="mb-2">
                <FontAwesomeIcon icon={faMapSigns} className="mr-2" />
                <span>Italy, Lecce, Via Natti n.8</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                <span>(+39)-347-301-4358</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>majorandry@icloud.com</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <span>Monday - Friday: 9am-17pm</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <DarkerBackground className="footer-copyright text-center py-3">
        © 2021 E-Commerce
      </DarkerBackground>
    </StyledFooter>
  );
};

export default Footer;
