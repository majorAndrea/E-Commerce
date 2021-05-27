import React from "react";
import Product from "../../components/product/product.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { getProductsOfCategorySelector } from "../../redux/products/products.selectors.js";

const Products = ({
  match: {
    params: { category },
  },
  categoryProducts,
}) => {
  return (
    <Container as="article">
      <h2>
        {category.replace(category.charAt(0), category.charAt(0).toUpperCase())}
      </h2>

      <Row xs={1} md={3}>
        {categoryProducts.map((item) => (
          <Col as="section" key={item.id}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { superCategory, category },
    },
  }
) => ({
  categoryProducts: getProductsOfCategorySelector(
    superCategory,
    category
  )(state),
});

export default connect(mapStateToProps, null)(Products);
