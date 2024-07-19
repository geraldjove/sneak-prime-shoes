import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import RatingComponent from "./RatingComponent";
import { Link } from "react-router-dom";

const ProductCard = ({ limit }) => {
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

  return (
    <>
      {products.slice(0, limit).map((product, index) => {
        return (
          <div
            key={product._id}
            className="bg-gray-200 rounded-md flex flex-col justify-center items-center p-2 max-h-full"
          >
            <div className="max-w-[100%] mb-5 ">
              <img
                src={product.productImage}
                alt="product-photo"
                className="w-[100vh]"
              />
            </div>
            <div className="flex flex-col items-center justify-around">
              <h1 className="text-[1.5rem]">{product.productName}</h1>
              <div className="flex mb-5">
                {/* Stars */}
                <RatingComponent rating={product.productRating} />
              </div>
              {product.isOnSale ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  <h3 className="text-[1rem] font-normal opacity-30 line-through">
                    ${product.productPrice}
                  </h3>
                  <h3 className="text-[1rem] font-normal text-red-500">
                    ${product.productPrice}
                  </h3>
                </div>
              ) : (
                <div className=" gap-3 ">
                  <h3 className="text-[1rem] font-normal">
                    ${product.productPrice}
                  </h3>
                </div>
              )}
            </div>
            <div className="my-2">
              <Link to={`/products/${product._id}`}>
                <button className="bg-black text-white p-3 px-5 rounded-full">
                  Go to Product
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
