import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!isLogin) {
    alert("please Login first");
    navigate("/");
  } else {
    return children;
  }
}
