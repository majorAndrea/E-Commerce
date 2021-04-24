import React from "react";
import Section from "../../components/section/section.component.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
      <Row as="section">
        {categoryProducts.map((item) => (
          <Section
            key={item.id}
            background={item.background_image}
            buttonColor="success"
            buttonText="See more"
            buttonUrl={"/" + item.id}
            isProduct={{
              productName: item.name,
              productDescription: item.description,
            }}
          />
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
