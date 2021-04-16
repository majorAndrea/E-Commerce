import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./section.styles.css";

const Section = ({
  background,
  isProduct = {},
  sectionName = "No Section Name",
  history,
  match,
  buttonUrl = "No URL",
  buttonColor,
  buttonText = "No Button Text",
}) => {
  return (
    <Col className="element" as="section" xs>
      <div
        aria-hidden
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      {Object.keys(isProduct).length > 0 ? (
        <div className="product-details">
          <p className="product-name">{isProduct.productName.toUpperCase() || "No Product Name"}</p>
          <p className="product-desc">{isProduct.productDescription || "No Product Description"}</p>
        </div>
      ) : (
        <p className="category-name">{sectionName.toUpperCase()}</p>
      )}
      <Button
        onClick={() => history.push(`${match.url}${buttonUrl}`)}
        type="button"
        as="a"
        size="sm"
        variant={buttonColor}
        className="custom-button"
      >
        {buttonText}
      </Button>
    </Col>
  );
};

export default withRouter(Section);
