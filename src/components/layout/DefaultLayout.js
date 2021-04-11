import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Footer } from "./partial/Footer";
import Header from "./partial/Header";

import "./defaultLayout.css";
import SideBarNav from "../side-bar/SideBarNav";
const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="left-bar">
        <div className="admin-log p-2 mb-5">Admin Panel</div>
        <SideBarNav />
      </div>
      <div className="main">
        <Header />
        <Jumbotron>{children}</Jumbotron>

        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
