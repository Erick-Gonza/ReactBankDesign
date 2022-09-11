import React, { useEffect } from "react";
import logoIcon2 from "../assets/logo2.png";

const About = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <section className="main__about">
        <h2 className="main__about-title">About us?</h2>
        <p className="main__about-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptas
          tempora animi incidunt consectetur maiores atque quasi voluptatem
          mollitia a dolorum quos.
        </p>
        <p className="main__about-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          voluptas.
        </p>
        <img src={logoIcon2} alt="" className="main__about-img" />
      </section>
    </>
  );
};

export default About;
