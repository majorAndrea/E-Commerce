import React from "react";
import { connect } from "react-redux";
import { fetchDataStart } from "../../redux/products/products.actions.js";
import CategoryContainer from "../../components/category/category.container.js";

class Main extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <main>
        <CategoryContainer categoryName="Technology" retrive="tech" />
        <CategoryContainer categoryName="Fashion" retrive="fashion" />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataStart()),
});

export default connect(null, mapDispatchToProps)(Main);
