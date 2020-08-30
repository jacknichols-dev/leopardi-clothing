import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="menu-item__bgImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="menu-item__content">
        <h1 className="menu-item__content--title">{title.toUpperCase()}</h1>
        <span className="menu-item__content--subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
