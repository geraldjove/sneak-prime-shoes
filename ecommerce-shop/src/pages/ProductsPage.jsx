import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import TitleComponent from "../components/TitleComponent";
import SearchAndSortComponent from "../components/SearchAndSortComponent";

const ProductsPage = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-background p-5">
        <div className="container mx-auto min-h-[100vh] flex flex-col justify-center items-center">
          <div className="mt-10">
            <TitleComponent
              title="shoes"
              subtitle="products"
              backgroundText="sneaker"
            />
          </div>
          <div className="grid grid-cols-[85%_15%] gap-4">
            <div className="grid grid-cols-5 gap-4">
              <ProductCard />
            </div>
            {/* Sidebar Search Component */}
            <SearchAndSortComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
