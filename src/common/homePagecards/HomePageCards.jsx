import React from "react";

const HomePageCards = ({ imageSrc, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="homepage-card">
        <img src={imageSrc} alt={title} />
        <div className="p-2">
          <h5 className="mb-4">{title}</h5>
          <p className="homepage-card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCards;
