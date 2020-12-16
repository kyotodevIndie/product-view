import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Product from "./components/Product";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="produto/:id" element={<Product />} />
            <Route path="contato" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
