import React, { useEffect } from "react";

const Contact = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <form action="#" className="main__form">
        <h2 className="main__form-title">Contact Us</h2>
        <input
          type="text"
          placeholder="Full Name"
          id="user"
          required
          minLength="5"
          className="main__form-user"
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          id="pass"
          required
          minLength="5"
          className="main__form-password"
        />
        <br />
        <textarea
          className="main__form-message"
          name="message"
          id="message"
          cols="30"
          rows="2"
          placeholder="Enter your message here"
        ></textarea>
        <br />
        <p>
          Forgot your passowrd? <a href="#">click here</a>
        </p>
        <button className="main__btn">Log In</button>
      </form>
      <section className="main__address">
        <h2 className="main__address-title">Address Street 890, NY</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57504.96590878375!2d-100.3337278!3d25.7355171161543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662945dafb9a707%3A0xc89fc164491b6cc7!2sPlaza%20Fiesta%20An%C3%A1huac!5e0!3m2!1ses-419!2smx!4v1662415777810!5m2!1ses-419!2smx"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="main__address-img"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
