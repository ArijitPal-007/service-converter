import React from "react";
import "./serviceCard.css"; 

const ServiceCard = ({
  id,
  icon,
  title,
  image,
  description,
  navigate,
}) => {
  return (
    <div className="card" key={id}>
      <div className="card-content">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <img src={image} alt="" className="logo-image"/>
        <p>{description}</p>
        <button className="card-button" onClick={navigate}>
          Start
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
