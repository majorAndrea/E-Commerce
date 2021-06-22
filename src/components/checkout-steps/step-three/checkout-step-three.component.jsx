import React from "react";
import { connect } from "react-redux";
import {
  selectCheckoutInfoPersonal,
  selectCheckoutInfoSpedition,
} from "../../../redux/checkout/checkout.selectors";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const CheckoutStepThree = ({ userPersonalInfo, userSpeditionInfo }) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push(`/checkout/steps/two`);
  };

  return (
    <Col>
      <Row className="mt-3">
        <Col md={12} lg={6} className="mb-3 mb-lg-0">
          <h5>Personal</h5>
          <ListGroup variant="flush">
            <ListGroup.Item>{userPersonalInfo.firstname}</ListGroup.Item>
            <ListGroup.Item>{userPersonalInfo.lastname}</ListGroup.Item>
            <ListGroup.Item>{userPersonalInfo.email}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Spedition</h5>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {userSpeditionInfo.country} {userSpeditionInfo.state}
            </ListGroup.Item>
            <ListGroup.Item>
              {userSpeditionInfo.city} {userSpeditionInfo.zipCode}
            </ListGroup.Item>
            <ListGroup.Item>{userSpeditionInfo.addressOne}</ListGroup.Item>
            <ListGroup.Item>{userSpeditionInfo.addressTwo}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className="mt-3">
        <p className="text-muted mb-3">
          On the Next page you will see your order summary.
        </p>
        <div className="d-flex justify-content-between">
          <Button type="dark" variant="dark" onClick={handleGoBack}>
            Go Back
          </Button>
          <Button
            type="button"
            variant="success"
            onClick={() => history.push(`/checkout/steps/final`)}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Col>
  );
};

const mapStateToProps = createStructuredSelector({
  userPersonalInfo: selectCheckoutInfoPersonal,
  userSpeditionInfo: selectCheckoutInfoSpedition,
});

export default connect(mapStateToProps, null)(CheckoutStepThree);
