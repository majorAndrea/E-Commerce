import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { CustomAlertContext } from "../../providers/custom-alert/custom-alert.provider.jsx";

const CustomAlert = () => {
  const { alertDetails, setAlertDetails } = useContext(CustomAlertContext);
  return (
    <Container>
      <Alert
        show={alertDetails.display}
        variant={alertDetails.variant}
        onClose={() => setAlertDetails({ ...alertDetails, display: false })}
        dismissible
      >
        <Alert.Heading>{alertDetails.title}</Alert.Heading>
        <p>{alertDetails.message}</p>
      </Alert>
    </Container>
  );
};

export default CustomAlert;
