import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./partial/Footer";
import Header from "./partial/Header";

import "./defaultLayout.css";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <div>
        <Row>
          <Col xs={4}>
            <div className="left-bar">i am form the left menu</div>
          </Col>
          <Col xs={8}>
            <div className="main">
              <Header />
              {children}
              <Footer />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DefaultLayout;
