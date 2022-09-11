import React, { useEffect } from "react";
import cardIcon from "../assets/Card.png";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <section className="main__container">
        <h1 className="main__title">
          KNOW WHERE YOUR <br />
          MONEY IS GOING
        </h1>
        <p className="main__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img src={cardIcon} alt="card" className="main__card" />
        <button className="main__btn">Get started</button>
      </section>

      <section className="main__cards">
        <img src={cardIcon} alt="" className="main__cards--sizeL" />
        <br />
        <img src={cardIcon} alt="" className="main__cards--sizeR" />
      </section>
    </>
  );
};

export default Home;
