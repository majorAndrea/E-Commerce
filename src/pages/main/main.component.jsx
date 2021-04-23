import React from "react";
import { connect } from "react-redux";
import { fetchDataStart } from "../../redux/products/products.actions.js";
import CategoryContainer from "../../components/category/category.container.js";
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <Container>
        <CategoryContainer categoryName="Technology" retrive="tech" />
        <CategoryContainer categoryName="Fashion" retrive="fashion" />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataStart()),
});

export default connect(null, mapDispatchToProps)(Main);
