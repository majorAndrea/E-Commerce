import React from "react";
import { withRouter } from "react-router-dom";
import { CategorySection, CategoryName, Background } from "./section.styles";

const Section = ({
  background,
  sectionName = "No Section Name",
  history,
  match,
  url = "No URL",
}) => {
  return (
    <CategorySection
      as="section"
      className="element"
      xs
      onClick={() => history.push(`${match.url}${url}`)}
    >
      <Background
        aria-hidden
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      ></Background>

      <CategoryName className="section-name">
        {sectionName.toUpperCase()}
      </CategoryName>
    </CategorySection>
  );
};

export default withRouter(Section);
