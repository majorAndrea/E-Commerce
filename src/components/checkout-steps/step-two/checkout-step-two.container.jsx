import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
  setCheckoutShipmentInfo,
  fetchCheckoutUserShipmentInfoFromDb,
} from "../../../redux/checkout/checkout.actions";
import { useHistory } from "react-router-dom";
import csc from "country-state-city";
import { createStructuredSelector } from "reselect";
import { selectCheckoutInfoShipment } from "../../../redux/checkout/checkout.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";

import CheckoutStepTwo from "./checkout-step-two.component";

const CheckoutStepTwoContainer = ({
  setCheckoutShipmentInfo,
  userShipmentInfo,
  currentUser,
  fetchCheckoutUserShipmentInfoFromDb,
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

  const [showNoUserShipmentInfoError, setShowNoUserShipmentInfoError] =
    useState(false);

  const [
    useCheckoutUserShipmentInfoFromDb,
    setUseCheckoutUserShipmentInfoFromDb,
  ] = useState(false);

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

    if (
      userShipmentInfo.country.length > 0 &&
      useCheckoutUserShipmentInfoFromDb
    ) {
      setUserLocation(userShipmentInfo);
    }

    // TODO: Improve this.
    if (!userShipmentInfo.country.length && useCheckoutUserShipmentInfoFromDb) {
      setShowNoUserShipmentInfoError(true);
    }

    fetchCountries();
  }, [
    userLocation.country,
    userLocation.state,
    userLocation.city,
    currentUser,
    useCheckoutUserShipmentInfoFromDb,
    fetchCheckoutUserShipmentInfoFromDb,
    userShipmentInfo,
  ]);

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

  const handleSwitch = ({ target: { checked } }) => {
    setUseCheckoutUserShipmentInfoFromDb(!useCheckoutUserShipmentInfoFromDb);
    if (checked) {
      return fetchCheckoutUserShipmentInfoFromDb(currentUser.id);
    }
    setUserLocation({
      country: "",
      state: "",
      city: "",
      zipCode: "",
      addressOne: "",
      addressTwo: "",
    });
    setShowNoUserShipmentInfoError(false);
  };

  return (
    <CheckoutStepTwo
      handleSubmit={handleSubmit}
      handleGoBack={handleGoBack}
      handleChange={handleChange}
      handleSwitch={handleSwitch}
      validated={validated}
      locations={locations}
      userLocation={userLocation}
      useCheckoutUserShipmentInfoFromDb={useCheckoutUserShipmentInfoFromDb}
      setUseCheckoutUserShipmentInfoFromDb={
        setUseCheckoutUserShipmentInfoFromDb
      }
      currentUser={currentUser}
      showNoUserShipmentInfoError={showNoUserShipmentInfoError}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCheckoutShipmentInfo: (userLocation) =>
    dispatch(setCheckoutShipmentInfo(userLocation)),
  fetchCheckoutUserShipmentInfoFromDb: (userId) =>
    dispatch(fetchCheckoutUserShipmentInfoFromDb(userId)),
});

const mapStateToProps = createStructuredSelector({
  userShipmentInfo: selectCheckoutInfoShipment,
  currentUser: selectCurrentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutStepTwoContainer);
