import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { motion } from "framer-motion";

const CheckoutStepTwo = ({
  handleSubmit,
  handleGoBack,
  handleChange,
  validated,
  locations,
  userLocation,
}) => {
  return (
    <Col xs="12" md="6">
      <motion.div
        initial={{ x: "+100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 150 }}
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
            <Form.Label className="mb-0">Address</Form.Label>
            <Form.Text id="addressOne" muted>
              Please double-check your address to see if is correct before
              proceeding.
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="1234 Main St"
              data-loctype="addressOne"
              onChange={handleChange}
              required
              isInvalid={validated && userLocation.addressOne.length === 0}
              isValid={validated && userLocation.addressOne}
              value={userLocation.addressOne}
              aria-describedby="addressOne"
            />
            <Form.Control.Feedback>OK!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please write your address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className="mb-0">Address 2</Form.Label>
            <Form.Text id="addressTwoOptional" muted>
              This field is optional
            </Form.Text>
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
              data-loctype="addressTwo"
              onChange={handleChange}
              value={userLocation.addressTwo}
              aria-describedby="addressTwoOptional"
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-4">
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

export default CheckoutStepTwo;
