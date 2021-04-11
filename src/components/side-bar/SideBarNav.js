import React from "react";

const SideBarNav = () => {
  return (
    <div className="sidebar-nav">
      <ul>
        <li>Dashboard</li>
        <li>
          <a href="category">Category</a>
        </li>
        <li>Product</li>
        <li>Order</li>
        <li>User</li>
        <li>Accounts</li>
      </ul>
    </div>
  );
};

export default SideBarNav;
