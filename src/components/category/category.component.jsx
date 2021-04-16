import React from "react";
import Section from "../section/section.component.jsx";
import Row from "react-bootstrap/Row";

const Category = ({ categoryName, productsFiltered }) => {
  return (
    <div>
      <h2>{categoryName}</h2>
      <Row as="section">
        {productsFiltered.map((category) => {
          return (
            <Section
              key={category.categoryName}
              categoryName={category.superCategory}
              sectionName={category.categoryName}
              buttonText="All &rarr;"
              background={category.background_image}
              buttonUrl={`${category.superCategory}/${category.categoryName}`}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default Category;
