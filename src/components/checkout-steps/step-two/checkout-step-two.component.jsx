import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUserCheckoutSpeditionInfo } from "../../../redux/user/user.actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import csc from "country-state-city";

const CheckoutStepTwo = ({ setUserCheckoutSpeditionInfo }) => {
  const history = useHistory();

  const [locations, setLocations] = useState({
    countries: [],
    states: [],
    cities: [],
  });

  const [userLocation, setUserLocation] = useState({
    country: null,
    state: null,
    city: null,
    zipCode: null,
    addressOne: null,
    addressTwo: null,
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await csc.getAllCountries();
      setLocations((prevState) => ({ ...prevState, countries }));
    };

    const fetchStates = async () => {
      const states = await csc.getStatesOfCountry(
        userLocation.country.split("-")[0]
      );
      setLocations((prevState) => ({ ...prevState, states }));
    };

    const fetchCities = async () => {
      const cities = await csc.getCitiesOfState(
        userLocation.country.split("-")[0],
        userLocation.state.split("-")[0]
      );
      setLocations((prevState) => ({ ...prevState, cities }));
    };

    if (!locations.countries.length) fetchCountries();
    if (userLocation.country) fetchStates();
    if (userLocation.state) fetchCities();
  }, [locations.countries.length, userLocation.country, userLocation.state]);

  const handleChange = ({ target }) => {
    const locType = target.getAttribute("data-loctype");
    setUserLocation({ ...userLocation, [locType]: target.value });
  };

  const handleGoBack = () => {
    history.push(`/checkout/steps/one`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCheckoutSpeditionInfo(userLocation);
    history.push(`/checkout/steps/three`);
  };

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                data-loctype="country"
                onChange={handleChange}
              >
                <option value="default">Select Country</option>
                {locations.countries
                  ? locations.countries.map((country) => {
                      return (
                        <option
                          key={country.name}
                          // Combined isoCode and country name with '-' because
                          // isoCode is needed to search all states of country,
                          // and country name is needed for storing the full name.
                          value={`${country.isoCode}-${country.name}`}
                        >
                          {country.name}
                        </option>
                      );
                    })
                  : "loading"}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                data-loctype="city"
                onChange={handleChange}
              >
                <option value="default">Select City</option>
                {locations.cities
                  ? locations.cities.map((city) => {
                      return (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      );
                    })
                  : "loading"}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                data-loctype="state"
                onChange={handleChange}
              >
                {locations.states
                  ? locations.states.map((state) => {
                      return (
                        <option
                          key={state.name}
                          // Combined isoCode and state name with '-' because
                          // isoCode is needed to search all cities of states,
                          // and state name is needed for storing the full name.
                          value={`${state.isoCode}-${state.name}`}
                        >
                          {state.name}
                        </option>
                      );
                    })
                  : "loading"}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="number"
                required
                data-loctype="zipCode"
                onChange={handleChange}
              />
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apartment, studio, or floor"
            data-loctype="addressTwo"
            onChange={handleChange}
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
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserCheckoutSpeditionInfo: (userLocation) =>
    dispatch(setUserCheckoutSpeditionInfo(userLocation)),
});

export default connect(null, mapDispatchToProps)(CheckoutStepTwo);
