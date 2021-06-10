import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, spinnerVHPosition, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay displayPosition={spinnerVHPosition || "40vh"}>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
