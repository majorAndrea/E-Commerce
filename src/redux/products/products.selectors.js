import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import values from "lodash.values";

const selectProducts = (state) => state.products;

export const productsSelector = createSelector(
  [selectProducts],
  (products) => products
);

export const productsDataSelector = createSelector(
  [productsSelector],
  (products) => products.data
);

export const productsIsFetchingSelector = createSelector(
  [selectProducts],
  (products) => products.isFetching
);

export const productsErrorMsgSelector = createSelector(
  [selectProducts],
  (products) => products.errorMsg
);

export const categoriesFilterBySuperCategorySelector = memoize(
  (superCategory) =>
    createSelector([productsDataSelector], (data) =>
      data
        ? data.filter(
            (el) =>
              el.superCategory.toLowerCase() === superCategory.toLowerCase()
          )
        : []
    )
);

export const getProductsOfCategorySelector = memoize(
  (superCategory, category) =>
    createSelector(
      [categoriesFilterBySuperCategorySelector(superCategory)],
      (data) =>
        data.filter(
          (el) => el.categoryName.toLowerCase() === category.toLowerCase()
        )[0].items
    ),
  (...args) => values(args).join("_")
);

export const getProductSelector = memoize(
  (superCategory, category, productId) =>
    createSelector(
      [getProductsOfCategorySelector(superCategory, category)],
      (items) =>
        items.filter((item) => parseInt(item.id) === parseInt(productId))[0]
    ),
  (...args) => values(args).join("_")
);
