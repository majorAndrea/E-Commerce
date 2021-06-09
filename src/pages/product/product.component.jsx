import React from "react";
import { withRouter } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  ProductImage,
  ProductName,
  ListProduct,
  ColorSelectContainer,
  ProductSpec,
  ProductDescHeading,
  ProductDesc,
} from "./product.styles";
import ProductReview from "../../components/product-review/product-review.component";

const Product = ({ product, addProductToCart, match }) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ProductImage
            as={Image}
            src={product.background_image}
            alt={product.name}
            thumbnail
            objectfit={
              match.params.superCategory === "fashion" ? "scale-down" : "cover"
            }
          ></ProductImage>
        </Col>
        <Col md={6} as="section" className="mt-4 mt-md-0">
          <ListProduct as={ListGroup} variant="flush">
            <ListGroup.Item>
              <ProductName>{product.name}</ProductName>
              <p
                className="starability-result m-0 p-0 mt-1 fs-6"
                data-rating="3"
              >
                Rated: 3 stars
              </p>
            </ListGroup.Item>
            <ListGroup.Item>&euro; {product.price}</ListGroup.Item>
            <ListGroup.Item>
              <ColorSelectContainer>
                <Form.Control size="sm" as="select">
                  <option>Colors</option>
                  {product.colors.map((color) => (
                    <option key={color} className="product-color">
                      {color}
                    </option>
                  ))}
                </Form.Control>
              </ColorSelectContainer>
            </ListGroup.Item>
            {product.specs ? (
              <ListGroup.Item>
                {Object.entries(product.specs).map((entry) => (
                  <ProductSpec className="d-block" key={entry[0]}>
                    {entry
                      .join(": ")
                      .replace(entry[0][0], entry[0][0].toUpperCase())}
                  </ProductSpec>
                ))}
              </ListGroup.Item>
            ) : null}
            <ListGroup.Item>
              <Button
                variant="success"
                type="button"
                onClick={() => {
                  addProductToCart(product);
                }}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListProduct>
        </Col>
      </Row>
      <Row>
        <Col as="section" className="mt-4 mx-2 mx-sm-0">
          <ProductDescHeading>Description:</ProductDescHeading>
          <ProductDesc>{product.description}</ProductDesc>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ProductReview />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Product);
