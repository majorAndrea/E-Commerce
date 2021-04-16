import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import "./product.styles.css";

const Product = ({ product, addProductToCart }) => {
  return (
    <Col
      md={{ span: 8, offset: 2 }}
      lg={{ span: 6, offset: 3 }}
      as="article"
      className="product"
    >
      <Card>
        <Card.Img variant="top" src={product.background_image} />
        <Card.Body>
          <h3 className="product-name">{product.name}</h3>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{product.description}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text>Available Colors:</Card.Text>
          <ListGroup horizontal={"sm"}>
            {product.colors.map((color) => (
              <ListGroup.Item key={color} className="product-color">
                {color}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>&euro; {product.price}</ListGroupItem>
          <ListGroupItem>
            <Button
              variant="success"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Product;
