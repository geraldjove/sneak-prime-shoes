import React from "react";
import TitleComponent from "./TitleComponent";
import ProductCard from "./ProductCard";
import SectionComponent from "./SectionComponent";

const BestSellerContent = () => {
  return (
    <>
      <SectionComponent>
        {/* Title */}
        <TitleComponent
          title="best seller"
          subtitle="products"
          backgroundText="product"
        />
        {/* Best Seller Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <ProductCard limit={1} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 ">
            <ProductCard />
          </div>
        </div>
      </SectionComponent>
    </>
  );
};

export default BestSellerContent;
