import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { setCheckoutShipmentInfo } from "../../../redux/checkout/checkout.actions";
import { useHistory } from "react-router-dom";
import csc from "country-state-city";
import { createStructuredSelector } from "reselect";
import { selectCheckoutInfoShipment } from "../../../redux/checkout/checkout.selectors";

import CheckoutStepTwo from "./checkout-step-two.component";

const CheckoutStepTwoContainer = ({
  setCheckoutShipmentInfo,
  userShipmentInfo,
}) => {
  const history = useHistory();

  const [locations, setLocations] = useState({
    countries: [],
    states: [],
    cities: [],
  });

  const [userLocation, setUserLocation] = useState({
    ...userShipmentInfo,
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await csc.getAllCountries();
      setLocations((prevState) => ({ ...prevState, countries }));
      fetchStates();
    };

    const fetchStates = async () => {
      const states = await csc.getStatesOfCountry(
        userLocation.country.split("-")[0]
      );
      if (!states.length) {
        // Empty user state field if user change country and there are not
        // any states for that country, so to avoid retain old state.
        setUserLocation((prevState) => ({ ...prevState, state: "" }));
      }
      setLocations((prevState) => ({ ...prevState, states }));
      fetchCities();
    };

    const fetchCities = async () => {
      const cities = await csc.getCitiesOfState(
        userLocation.country.split("-")[0],
        userLocation.state.split("-")[0]
      );
      if (!cities.length) {
        // Same as state above.
        setUserLocation((prevState) => ({ ...prevState, city: "" }));
      }
      setLocations((prevState) => ({ ...prevState, cities }));
    };

    fetchCountries();
  }, [userLocation.country, userLocation.state]);

  const handleChange = async ({ target }) => {
    const locType = target.getAttribute("data-loctype");
    setUserLocation({ ...userLocation, [locType]: target.value });
  };

  const handleGoBack = () => {
    history.push(`/checkout/steps/one`);
  };

  const validateFormInputs = (elements) => {
    return Array.from(elements).every((el) => {
      if (el.required) {
        return el.value.length > 0;
      }
      return true;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateFormInputs(e.currentTarget.elements);
    if (result) {
      history.push("/checkout/steps/three");
      setCheckoutShipmentInfo(userLocation);
    } else {
      setValidated(true);
    }
  };

  return (
    <CheckoutStepTwo
      handleSubmit={handleSubmit}
      handleGoBack={handleGoBack}
      handleChange={handleChange}
      validated={validated}
      locations={locations}
      userLocation={userLocation}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCheckoutShipmentInfo: (userLocation) =>
    dispatch(setCheckoutShipmentInfo(userLocation)),
});

const mapStateToProps = createStructuredSelector({
  userShipmentInfo: selectCheckoutInfoShipment,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutStepTwoContainer);
