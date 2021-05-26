import React, { useState } from "react";

export const DEFAULT_VALUES = {
  display: false,
  title: "No Title",
  message: "No Message",
  variant: "secondary",
};

export const CustomAlertContext = React.createContext({
  alertDetails: {
    ...DEFAULT_VALUES,
  },
  setAlertDetails: () => {},
});

export const CustomAlertProvider = ({ children }) => {
  const [alertDetails, setAlertDetails] = useState({ ...DEFAULT_VALUES });

  return (
    <CustomAlertContext.Provider
      value={{
        alertDetails,
        setAlertDetails,
      }}
    >
      {children}
    </CustomAlertContext.Provider>
  );
};
