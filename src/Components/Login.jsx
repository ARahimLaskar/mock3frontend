import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("https://quaint-gilet-cow.cyclic.app/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          navigate("/dashboard");
        }
      });
  };
  return (
    <div>
      <h1>login</h1>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
