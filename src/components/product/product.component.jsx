import React from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  CardStyle,
  CardImgWrapper,
  CardDescWrapper,
  ProductImg,
} from "./product.styles";

const Product = ({ item, history, match, superCategory }) => {
  console.log(superCategory);
  return (
    <CardStyle as={Card}>
      <CardImgWrapper>
        <ProductImg
          src={item.background_image}
          alt=""
          objectfit={superCategory === "fashion" ? "scale-down" : "cover"}
        />
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
