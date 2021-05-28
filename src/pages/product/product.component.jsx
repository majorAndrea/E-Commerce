import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { ProductImage } from "./product.styles";

const Product = ({ product, addProductToCart }) => {
  console.log(product.specs);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ProductImage
            as={Image}
            src={product.background_image}
            alt={product.name}
            thumbnail
          ></ProductImage>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>{product.name}</b>
            </ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>{product.description}</Col>
      </Row>
    </Container>
  );
};

export default Product;
