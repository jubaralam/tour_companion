import React from "react";

import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
