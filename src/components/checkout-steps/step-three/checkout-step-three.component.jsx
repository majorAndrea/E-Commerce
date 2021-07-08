import React, { useState } from "react";
import { connect } from "react-redux";
import {
  selectCheckoutInfoPersonal,
  selectCheckoutInfoShipment,
} from "../../../redux/checkout/checkout.selectors";
import { setCheckoutUserInfoToDb } from "../../../redux/checkout/checkout.actions";
import { selectCurrentUser } from "../../../redux/user/user.selectors.js";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { motion } from "framer-motion";

const CheckoutStepThree = ({
  userPersonalInfo,
  userShipmentInfo,
  setCheckoutUserInfoToDb,
  currentUser,
}) => {
  const history = useHistory();
  const [saveUserInfoToDb, setSaveUserInfoToDb] = useState(false);

  const handleGoBack = () => {
    history.push(`/checkout/steps/two`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (saveUserInfoToDb) {
      setCheckoutUserInfoToDb({
        id: currentUser.id,
        personal: userPersonalInfo,
        shipment: userShipmentInfo,
      });
    }
    history.push(`/checkout/steps/final`);
  };

  return (
    <Col xs={12} lg={6}>
      <motion.div
        initial={{ x: "+100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ stiffness: 150 }}
        className="m-0 p-0"
      >
        <Row className="mt-3">
          <Col className="mb-3 mb-sm-0" xs={12} sm={6}>
            <h5>Personal</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>{userPersonalInfo.firstname}</ListGroup.Item>
              <ListGroup.Item>{userPersonalInfo.lastname}</ListGroup.Item>
              <ListGroup.Item>{userPersonalInfo.email}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h5>Shipment</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {userShipmentInfo.country.split("-")[1]}{" "}
                {userShipmentInfo.state.split("-")[1]}
              </ListGroup.Item>
              <ListGroup.Item>
                {userShipmentInfo.city} {userShipmentInfo.zipCode}
              </ListGroup.Item>
              <ListGroup.Item>{userShipmentInfo.addressOne}</ListGroup.Item>
              {userShipmentInfo.addressTwo ? (
                <ListGroup.Item>{userShipmentInfo.addressTwo}</ListGroup.Item>
              ) : null}
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
            <Button type="button" variant="success" onClick={handleClick}>
              Confirm
            </Button>
          </div>
        </div>
        <aside>
          <hr />
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={saveUserInfoToDb}
            label="Save Personal & Shipment information on the account"
            className="align-self-center"
            onChange={() => setSaveUserInfoToDb(!saveUserInfoToDb)}
          />
        </aside>
      </motion.div>
    </Col>
  );
};

const mapStateToProps = createStructuredSelector({
  userPersonalInfo: selectCheckoutInfoPersonal,
  userShipmentInfo: selectCheckoutInfoShipment,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCheckoutUserInfoToDb: (userInfo) =>
    dispatch(setCheckoutUserInfoToDb(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutStepThree);
