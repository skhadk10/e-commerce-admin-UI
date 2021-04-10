import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./PasswordResetForm.style.css";

const PasswordResetForm = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    console.log("whole event>>> ", e.target.value);
    const { value } = e.target;
    setEmail(value);

    console.log(email);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
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
              value={email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/" className="text center">
          login Form?
        </a>
      </Card>
    </div>
  );
};

export default PasswordResetForm;
