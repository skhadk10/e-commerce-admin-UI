import React, { useState, useEffect } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./loginForm.style.css";
import { sendLogin } from "../../../page/login/loginAction.js";
const initialState = {
  email: "sanish3@gmail.com",
  password: "123456",
};

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse } = useSelector((state) => state.login);
  const [login, setLogin] = useState(initialState);

  const token = sessionStorage.getItem("accessJWT");
  console.log(token);
  useEffect(() => {
    token && history.push("/dashboard");
  }, [history, loginResponse, token]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("plz fill up all the input field");
    }
    dispatch(sendLogin(login));
    console.log("sendLogin",login)
    // history.push("/dashboard");
  };
  return (
    <div className="login-form">
      <Card className="py-4">
        {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

        {loginResponse?.message && (
          <Alert
            variant={loginResponse?.status === "success" ? "success" : "danger"}
          >
            {loginResponse?.message}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={login.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/reset-password" className="text center">
          Forget Password?
        </a>
      </Card>
    </div>
  );
};

export default LoginForm;
