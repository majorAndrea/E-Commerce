import { connect } from "react-redux";
import { compose } from "redux";
import Category from "./category.component.jsx";
import WithSpinner from "../with-spinner/with-spinner.component.jsx";
import { productsIsFetchingSelector } from "../../redux/products/products.selectors.js";
import {categoriesFilterBySuperCategorySelector} from "../../redux/products/products.selectors.js";

const mapStateToProps = (state, ownProps) => ({
  isLoading: productsIsFetchingSelector(state),
  productsFiltered: categoriesFilterBySuperCategorySelector(ownProps.retrive)(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(Category);

export default CategoryContainer;
