import React from "react";
import Section from "../section/section.component.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Category = ({ categoryName, productsFiltered }) => {
  return (
    <div>
      <h2>{categoryName}</h2>
      <Row as="section">
        {productsFiltered.map((category) => {
          return (
            <Col sm={12} md={4} key={category.categoryName}>
              <Section
                categoryName={category.superCategory}
                sectionName={category.categoryName}
                background={category.background_image}
                url={`${category.superCategory}/${category.categoryName}`}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Category;
