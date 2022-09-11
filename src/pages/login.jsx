import React, { useEffect } from "react";

const Login = ({ title }) => {
  useEffect(() => {
    document.title = `CCNT BANK | ${title}`;
  });
  return (
    <>
      <form action="#" className="main__form">
        <h2 className="main__form-title">Welcome</h2>
        <input
          type="text"
          placeholder="User"
          id="user"
          required
          className="main__form-user"
          minLength="5"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="pass"
          required
          className="main__form-password"
          minLength="5"
        />
        <br />
        <p>
          Forgot your passowrd? <a href="#">click here</a>
        </p>
        <button className="main__btn">Log In</button>
      </form>
    </>
  );
};

export default Login;
