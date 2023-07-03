import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddEmployee() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    axios
      .post("https://quaint-gilet-cow.cyclic.app/dashboard/employees", {
        first_name,
        last_name,
        email,
        department,
        salary,
      })
      .then((res) => {
        alert("Employee Data created Successfully");
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setSalary("");
  };

  return (
    <>
      <Box
        w="300px"
        p="20px"
        m="20px auto"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Input
          type="text"
          placeholder="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          placeholder="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>

        <Input
          type="number"
          placeholder="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <br />

        <Button onClick={handleSubmit}>Submit</Button>
        <br />
        <Button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Back to Dashboard
        </Button>
      </Box>
    </>
  );
}
