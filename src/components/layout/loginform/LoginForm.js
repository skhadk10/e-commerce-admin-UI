import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./loginForm.style.css";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    console.log("from form component>>", e.target.value);
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <div className="login-form">
      <Card className="py-4">
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
