import React from "react";
import Hero from "../components/Hero";
import FeaturedContent from "../components/FeaturedContent";
import BestSellerContent from "../components/BestSellerContent";
import ViewAllProductsComponent from "../components/ViewAllProductsComponent";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedContent />
      <BestSellerContent />
      <ViewAllProductsComponent />
    </>
  );
};

export default HomePage;
