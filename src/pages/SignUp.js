import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../Common/Navbar/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import LockCloseIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        contactNumber,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      navigate("/signin");
    } else {
      console.log("Error in signup");
      //navigate("/addProduct");
    }
  };
  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center vh-100 div-center">
        <Container className="content">
          <center>
            <LockCloseIcon className="rounded-icon"></LockCloseIcon>
          </center>
          <h5 className="text-center paddingTop10"> Sign Up</h5>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formFirstName" className="form-group">
              <Form.Control
                type="text"
                placeholder="First Name *"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formLastName" className="form-group">
              <Form.Control
                type="text"
                placeholder="Last Name *"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formBasicEmail" className="form-group">
              <Form.Control
                type="email"
                placeholder="Email *"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formBasicPassword" className="form-group">
              <Form.Control
                type="password"
                placeholder="Password *"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formContactNumber" className="form-group">
              <Form.Control
                type="text"
                placeholder="Contact Number *"
                value={contactNumber}
                onChange={handleContactNumberChange}
              />
            </FormGroup>
            <br />
            <Button
              variant="primary"
              type="submit"
              value="SIGN UP"
              className="btn-primary width100"
            >
              SIGN UP
            </Button>
            <br></br>
            <Link to={"/login"} className="paddingTop10">
              Already have an account? Sign In
            </Link>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
};
export default SignUp;
