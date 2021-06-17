import React from "react";
import { withRouter } from "react-router-dom";
import { CategorySection, CategoryName, Background } from "./section.styles";

const Section = ({
  background = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=60",
  sectionName = "No Section Name",
  history,
  match,
  url = "No URL",
}) => {
  return (
    <CategorySection
      xs
      onClick={() => history.push(`${match.url}${url}`)}
      className="mb-3 mb-md-0"
    >
      <Background
        aria-hidden
        style={{ backgroundImage: `url(${background})` }}
      ></Background>

      <CategoryName>{sectionName.toUpperCase()}</CategoryName>
    </CategorySection>
  );
};

export default withRouter(Section);
