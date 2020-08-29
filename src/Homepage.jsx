import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__options">
        <div className="homepage__options--item">
          <div className="homepage__content">
            <h1 className="homepage__content--title">Jackets</h1>
            <span className="homepage__content--subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__options--item">
          <div className="homepage__content">
            <h1 className="homepage__content--title">Coats</h1>
            <span className="homepage__content--subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__options--item">
          <div className="homepage__content">
            <h1 className="homepage__content--title">Shirts</h1>
            <span className="homepage__content--subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__options--item">
          <div className="homepage__content">
            <h1 className="homepage__content--title">Dressing Gowns</h1>
            <span className="homepage__content--subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__options--item">
          <div className="homepage__content">
            <h1 className="homepage__content--title">Bags</h1>
            <span className="homepage__content--subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
