import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error" + error);
      }
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {products.map((product, index) => (
            <Route
              path={`/products/${product._id}`}
              key={index}
              element={<ProductPage product={product} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>

      <FooterComponent />
    </>
  );
};

export default App;
