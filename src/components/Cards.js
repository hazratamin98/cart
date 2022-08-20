import React, { useState } from "react";
import "../styles/cart.css";

const Cards = ({ key, item, handleClick }) => {
  const { amount, author, img, price, title, id } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{price}</p>

        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
