import React, { useEffect } from "react";
import servicesIcon from "../assets/services.png";

const Services = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <section className="main__services">
        <h2 className="main__services-title">OUR SERVICES</h2>
        <img src={servicesIcon} alt="" className="main__services-img" />
        <h3 className="main__services-subtitle">LOAN MONEY</h3>
        <p className="main__services-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
    </>
  );
};

export default Services;
