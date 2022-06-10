import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Epic Dance Club</h1>
      <div className="menus">
        <ul>
          <a href="/home">Home</a>
          <a href="/dancers">Dancers</a>
          <a href="/community">Community</a>
          <a href="/support">Support</a>
          <a href="/about">About</a>
          <a href="/summer-club">Summer Club</a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
