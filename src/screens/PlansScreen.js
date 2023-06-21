import React, { useState } from "react";
import "./PlansScreen.css";
import { useNavigate } from "react-router-dom";

const PlansScreen = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { name: "Premium", description: "4K + HDR" },
    { name: "Basic", description: "720p" },
    { name: "Standard", description: "1080p" },
  ]);

  return (
    <div className="plansScreen">
      {products.map((product, index) => {
        return (
          <div className="plansScreen__plan" key={index}>
            <div className="plansScreen__info">
              <h5>{product.name}</h5>
              <h6>{product.description}</h6>
            </div>
            <button
              className={index === 2 ? "afterme" : "beforeme"}
              onClick={() => navigate("/")}
            >
              {index === 2 ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
