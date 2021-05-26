import React from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardStyle, CardImgWrapper, CardDescWrapper } from "./product.styles";

const Product = ({ item, history, match }) => {
  return (
    <CardStyle as={Card}>
      <CardImgWrapper>
        <Card.Img variant="top" src={item.background_image} />
      </CardImgWrapper>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <CardDescWrapper as={Card.Text} style={{ height: "5rem" }}>
          {item.description}
        </CardDescWrapper>
        <Button
          variant="success"
          onClick={() => history.push(`${match.url}/${item.id}`)}
        >
          See More
        </Button>
      </Card.Body>
    </CardStyle>
  );
};

export default withRouter(Product);
