import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../../../utils";

const ProtectedRoute = (props) => {

  let auth = getCurrentUser();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
