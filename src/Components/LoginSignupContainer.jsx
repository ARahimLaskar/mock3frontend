import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";

export default function LoginSignupContainer() {
  const [toggle, setToggle] = useState("");
  return (
    <Box
      p="20px"
      m="30px auto"
      w="300px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Button onClick={() => setToggle("login")}>Login</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button onClick={() => setToggle("signup")}>Signup</Button>
      <Box>{toggle === "login" ? <Login /> : <Signup />}</Box>
    </Box>
  );
}
