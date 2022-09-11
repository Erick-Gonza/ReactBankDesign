import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./background/Background";
// React Router Links / Pages
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Services from "../pages/services.jsx";
import Products from "../pages/products.jsx";
import Contact from "../pages/contact.jsx";
import Login from "../pages/login.jsx";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/services" element={<Services title="Services" />} />
        <Route path="/products" element={<Products title="Products" />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<Contact title="Contact" />} />
        <Route path="/login" element={<Login title="Log In" />} />
      </Routes>
      <Background />
    </main>
  );
};

export default Main;
