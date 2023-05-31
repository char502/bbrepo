import React from "react";

export const Card = ({
  id,
  prodImage,
  altText,
  agency,
  title,
  price,
  buyText,
  moreText,
}) => (
  <div className="product-card" key={id}>
    <img src={prodImage} alt={altText} />
    <div className="card_content">
      <h2 className="card_agency">{agency}</h2>
      <h2 className="card_title">{title}</h2>
      <p className="card_price">£{price}</p>
      <div className="card_buttonGroup">
          <button className="card_buttonBuy">{buyText}</button>
          <button className="card_buttonMore">{moreText}</button>
      </div>
    </div>
  </div>
);
