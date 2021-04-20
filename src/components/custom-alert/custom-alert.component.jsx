import React from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({
  customAlert: { message, title, display },
  hideCustomAlert,
}) => {
  return (
    <Alert
      show={display}
      variant="danger"
      onClose={() => hideCustomAlert()}
      dismissible
    >
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default CustomAlert;
