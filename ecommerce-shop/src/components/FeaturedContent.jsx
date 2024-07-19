import React from "react";
import ProductCard from "./ProductCard";
import TitleComponent from "./TitleComponent";
import SectionComponent from "./SectionComponent";

const FeaturedContent = () => {
  return (
    <>
      <SectionComponent>
        {/* Title */}
        <TitleComponent
          title="featured"
          subtitle="products"
          backgroundText="sneaker"
        />
        {/* Featured Cards */}
        <div className="grid sm:grid-cols-4 gap-6">
          <ProductCard limit={4} />
        </div>
      </SectionComponent>
    </>
  );
};

export default FeaturedContent;
