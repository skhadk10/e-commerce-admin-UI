import React from "react";
import "./sideBarNav.style.css";
import { Link } from "react-router-dom";
const SideBarNav = () => {
  return (
    <div className="sideBar-nav">
      <ul>
        <li>
          <Link to="/dashboard">
            {" "}
            <i className="fas fa-tachometer-alt"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/category">
            {" "}
            <i className="fas fa-sitemap"></i>Category
          </Link>
        </li>
        <li>
          <Link to="/products">
            <i className="fas fa-table"></i> Product
          </Link>
        </li>
        <li>
          <Link to="/order">
            <i className="fas fa-shopping-cart"></i> Order
          </Link>
        </li>
        <li>
          <Link to="/user">
            <i className="fas fa-user"></i> User
          </Link>
        </li>
        <li>
          <Link to="/account">
            <i className="fas fa-cogs"></i> Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
