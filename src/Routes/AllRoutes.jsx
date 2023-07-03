import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Dashboard from "../Components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LoginSignupContainer from "../Components/LoginSignupContainer";
import AddEmployee from "../Components/AddEmployee";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginSignupContainer />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/addemployee"
        element={
          <PrivateRoute>
            <AddEmployee />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
