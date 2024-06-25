import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return navigate("/user/login");
  }
  return <div>{children}</div>;
};

export default PrivateRoutes;
