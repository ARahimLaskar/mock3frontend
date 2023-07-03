import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_password] = useState();

  const handleSignup = () => {
    axios
      .post("https://quaint-gilet-cow.cyclic.app/user/signup", {
        email,
        password,
        confirm_password,
      })
      .then((res) => {
        console.log(res);
        alert("signup successful");
      });
  };

  return (
    <Box>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm_password(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </Box>
  );
}
