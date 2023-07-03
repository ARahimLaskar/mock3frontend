import React, { useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleAddemployee = () => {
    navigate("/addemployee");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {}, []);
  return (
    <>
      <Box>
        <Button onClick={handleAddemployee}>Add Employee</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
      <br />
      <br />
      <Box></Box>
    </>
  );
}
