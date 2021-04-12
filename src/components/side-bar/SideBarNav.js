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
            <i class="fas fa-tachometer-alt"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/category">
            {" "}
            <i class="fas fa-sitemap"></i>Category
          </Link>
        </li>
        <li>
          <Link to="/product">
            <i class="fas fa-table"></i> Product
          </Link>
        </li>
        <li>
          <Link to="/order">
            <i class="fas fa-shopping-cart"></i> Order
          </Link>
        </li>
        <li>
          <Link to="/user">
            <i class="fas fa-user"></i> User
          </Link>
        </li>
        <li>
          <Link to="/account">
            <i class="fas fa-cogs"></i> Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
