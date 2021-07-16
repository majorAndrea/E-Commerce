import React from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  CardStyle,
  CardImgWrapper,
  CardDescWrapper,
  CardHeading,
  ProductImg,
} from "./product.styles";

const Product = ({ item, history, match, superCategory }) => {
  return (
    <CardStyle as="article" className="card mb-4 mb-md-0 mt-1 shadow">
      <CardImgWrapper>
        <ProductImg
          src={item.background_image}
          alt="Preview of the article"
          objectfit={superCategory === "fashion" ? "scale-down" : "cover"}
        />
      </CardImgWrapper>
      <Card.Body className="mx-0 mx-lg-4">
        <CardHeading as={Card.Title}>{item.name}</CardHeading>
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
