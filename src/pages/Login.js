import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../Common/Navbar/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import LockCloseIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
  };
  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center vh-100 div-center">
        <Container className="content">
          <center>
            <LockCloseIcon className="rounded-icon"></LockCloseIcon>
          </center>
          <h5 className="text-center paddingTop10"> Sign In</h5>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formBasicEmail" className="form-group">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formBasicPassword" className="form-group">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <br />
            <Button
              variant="primary"
              type="submit"
              value="SIGN IN"
              className="btn-primary width100"
            >
              SIGN IN
            </Button>
            <br></br>
            <Link to={"/signup"} className="paddingTop10">
              Don't have an account? Sign Up
            </Link>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
};
export default Login;
