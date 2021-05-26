import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import "./section.styles.css";

const Section = ({
  background,
  sectionName = "No Section Name",
  history,
  match,
  url = "No URL",
}) => {
  return (
    <Col
      className="element"
      as="section"
      xs
      onClick={() => history.push(`${match.url}${url}`)}
    >
      <div
        aria-hidden
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <p className="category-name">{sectionName.toUpperCase()}</p>
    </Col>
  );
};

export default withRouter(Section);
