import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCheckoutShipmentInfo } from "../../../redux/checkout/checkout.actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import csc from "country-state-city";
import { createStructuredSelector } from "reselect";
import { selectCheckoutInfoShipment } from "../../../redux/checkout/checkout.selectors";
import { motion } from "framer-motion";

// TODO: Separate logic from view with container pattern.

const CheckoutStepTwo = ({ setCheckoutShipmentInfo, userShipmentInfo }) => {
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
    <Col xs="12" md="6" lg="5">
      <motion.div
        initial={{ x: "+100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, stiffness: 150 }}
        className="m-0 p-0"
      >
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  data-loctype="country"
                  onChange={handleChange}
                  required
                  isInvalid={validated && userLocation.country.length === 0}
                  isValid={validated && userLocation.country}
                  value={userLocation.country}
                >
                  {userLocation.country.length === 0 ? (
                    <option value={""}>Select Country</option>
                  ) : null}

                  {locations.countries.length > 0
                    ? locations.countries.map((country) => {
                        return (
                          <option
                            key={`${country.isoCode}-${country.name}`}
                            // Combined isoCode and country name with '-' because
                            // isoCode is needed to search all states of country,
                            // and country name is needed for storing the full name.
                            value={`${country.isoCode}-${country.name}`}
                          >
                            {country.name}
                          </option>
                        );
                      })
                    : "Loading countries..."}
                </Form.Control>
                <Form.Control.Feedback>OK!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please select your country.
                </Form.Control.Feedback>
              </Form.Group>

              {locations.cities.length > 0 ? (
                <Form.Group controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    as="select"
                    data-loctype="city"
                    onChange={handleChange}
                    required
                    isInvalid={validated && userLocation.city.length === 0}
                    isValid={validated && userLocation.city}
                    value={userLocation.city}
                  >
                    {userLocation.city.length === 0 ? (
                      <option value={""}>Select City</option>
                    ) : null}

                    {locations.cities.map((city) => {
                      return (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback>OK!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please select your city.
                  </Form.Control.Feedback>
                </Form.Group>
              ) : null}
            </Col>
            <Col>
              {locations.states.length > 0 ? (
                <Form.Group controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    as="select"
                    data-loctype="state"
                    onChange={handleChange}
                    required
                    isInvalid={validated && userLocation.state.length === 0}
                    isValid={validated && userLocation.state}
                    value={userLocation.state}
                  >
                    {userLocation.state.length === 0 ? (
                      <option value={""}>Select State</option>
                    ) : null}

                    {locations.states
                      ? locations.states.map((state) => {
                          return (
                            <option
                              key={`${state.isoCode}-${state.name}`}
                              // Combined isoCode and state name with '-' because
                              // isoCode is needed to search all cities of states,
                              // and state name is needed for storing the full name.
                              value={`${state.isoCode}-${state.name}`}
                            >
                              {state.name}
                            </option>
                          );
                        })
                      : "Loading states..."}
                  </Form.Control>
                  <Form.Control.Feedback>OK!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please select your state.
                  </Form.Control.Feedback>
                </Form.Group>
              ) : null}

              <Form.Group controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={1_000_000}
                  required
                  data-loctype="zipCode"
                  onChange={handleChange}
                  isInvalid={validated && userLocation.zipCode.length === 0}
                  isValid={validated && userLocation.zipCode}
                  value={userLocation.zipCode}
                />
                <Form.Control.Feedback>OK!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write your zipcode.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 Main St"
              data-loctype="addressOne"
              onChange={handleChange}
              required
              isInvalid={validated && userLocation.addressOne.length === 0}
              isValid={validated && userLocation.addressOne}
              value={userLocation.addressOne}
            />
            <Form.Control.Feedback>OK!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please write your address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className="mb-0">Address 2</Form.Label>
            <span className="text-muted d-block m-0 mt-1 mb-2">Optional</span>
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
              data-loctype="addressTwo"
              onChange={handleChange}
              value={userLocation.addressTwo}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="dark" type="button" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button variant="success" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </motion.div>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCheckoutShipmentInfo: (userLocation) =>
    dispatch(setCheckoutShipmentInfo(userLocation)),
});

const mapStateToProps = createStructuredSelector({
  userShipmentInfo: selectCheckoutInfoShipment,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutStepTwo);
