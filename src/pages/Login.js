import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../Common/Navbar/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import LockCloseIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      login();
      navigate("/");
    } else {
      //navigate("/home");
    }
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
                value={username}
                onChange={handleUsernameChange}
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
