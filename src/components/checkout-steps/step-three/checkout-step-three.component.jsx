import React from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const CheckoutStepThree = () => {
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
            <ListGroup.Item>Andrea</ListGroup.Item>
            <ListGroup.Item>Major</ListGroup.Item>
            <ListGroup.Item>my@email.it</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Spedition</h5>
          <ListGroup variant="flush">
            <ListGroup.Item>Italy, Apulia</ListGroup.Item>
            <ListGroup.Item>Lecce</ListGroup.Item>
            <ListGroup.Item>Galatone, 73044</ListGroup.Item>
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
          <Button type="button" variant="success">
            Confirm
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default CheckoutStepThree;
