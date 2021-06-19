import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import csc from "country-state-city";

const CheckoutStepTwo = () => {
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
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await csc.getAllCountries();
      setLocations((prevState) => ({ ...prevState, countries }));
    };

    const fetchStates = async () => {
      const states = await csc.getStatesOfCountry(
        userLocation.country.split(":")[0]
      );
      setLocations((prevState) => ({ ...prevState, states }));
    };

    const fetchCities = async () => {
      const cities = await csc.getCitiesOfState(
        userLocation.country.split(":")[0],
        userLocation.state.split(":")[0]
      );
      setLocations((prevState) => ({ ...prevState, cities }));
    };

    if (!locations.countries.length) fetchCountries();
    if (userLocation.country) fetchStates();
    if (userLocation.state) fetchCities();
  }, [locations.countries.length, userLocation.country, userLocation.state]);

  const handleCountry = ({ target: { value: country } }) => {
    setUserLocation({ ...userLocation, country });
  };

  const handleState = ({ target: { value: state } }) => {
    setUserLocation({ ...userLocation, state });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/checkout/steps/three`);
  };

  const handleGoBack = () => {
    history.push(`/checkout/steps/one`);
  };

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" onChange={handleCountry}>
                <option value="default">Select Country</option>
                {locations.countries
                  ? locations.countries.map((country) => {
                      return (
                        <option
                          key={country.name}
                          value={`${country.isoCode}:${country.name}`}
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
              <Form.Control as="select">
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
              <Form.Control as="select" onChange={handleState}>
                {locations.states
                  ? locations.states.map((state) => {
                      return (
                        <option
                          key={state.name}
                          value={`${state.isoCode}:${state.name}`}
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
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
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

export default CheckoutStepTwo;
