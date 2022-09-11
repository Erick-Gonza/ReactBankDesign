import React, { useEffect } from "react";
import cardIcon from "../assets/Card.png";

const Products = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <section className="main__products">
        <h2 className="main__products-title">OUR PRODUCTS</h2>
        <h3 className="main__products-subtitle">CCNCT CARD</h3>
        <p className="main__products-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img src={cardIcon} alt="" className="main__products-img" />
        <br />
        <button className="main__btn">Get It</button>
      </section>
      <section className="main__cards">
        <img src={cardIcon} alt="" className="main__cards--sizeL" />
        <br />
        <img src={cardIcon} alt="" className="main__cards--sizeR" />
      </section>
    </>
  );
};

export default Products;
