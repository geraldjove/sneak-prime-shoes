import React from "react";

const ViewAllProductsComponent = () => {
  return (
    <>
      <section className="min-h-[150px] flex justify-center items-center bg-background">
        <div className="flex justify-center items-center">
          <a href="/products">
            <button className="border-2 border-gray-500 p-3 px-10 rounded-full font-bold uppercase">
              View All Products
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default ViewAllProductsComponent;
