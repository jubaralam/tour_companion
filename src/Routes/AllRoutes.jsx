import React from "react";
import { Route, Routes } from "react-router-dom";

import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import PrivateRoutes from "../PrivateRoutes";
import AdminDashboard from "../Pages/AdminDashboard";
import UserDashboard from "../Pages/UserDashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/user/register" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />

      <Route
        path="/user/dashboard/:userID"
        element={
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user/dashboard/:adminID"
        element={
          <PrivateRoutes>
            <AdminDashboard />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
