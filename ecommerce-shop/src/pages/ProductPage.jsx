import React, { useState, useEffect } from "react";
import { FaRegCircle, FaCircle, FaStar, FaStarHalf } from "react-icons/fa";
import ProductOptionsComponent from "../components/ProductOptionsComponent";
import RatingComponent from "../components/RatingComponent";

const ProductPage = ({ product }) => {
  console.log(product);

  return (
    <>
      <section className="bg-background min-h-[100vh] flex flex-col justify-center items-center">
        <div className="container grid sm:grid-cols-5 justify-center items-center">
          <div className="col-span-1">
            <h1 className="text-1xl font-black">{product.productName}</h1>
            <p>{product.productDescription}</p>
            <div className="flex w-full space-x-5 justify-center my-5">
              <div className="min-h-[50px] min-w-[50px] max-w-[50px] bg-black">
                t
              </div>
              <div className="min-h-[50px] min-w-[50px] max-w-[50px] bg-black">
                t
              </div>
              <div className="min-h-[50px] min-w-[50px] max-w-[50px] bg-black">
                t
              </div>
              <div className="min-h-[50px] min-w-[50px] max-w-[50px] bg-black">
                t
              </div>
              <div className="min-h-[50px] min-w-[50px] max-w-[50px] bg-black">
                t
              </div>
            </div>
          </div>
          <div className="p-5 col-span-3 flex justify-center items-center">
            <img
              src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-sneaker-png-file-png-image_11492156.png"
              alt="shop"
              className="min-w-[50%] drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col space-y-5">
            <div className="my-5">
              <h6 className="uppercase font-bold">Size</h6>
            </div>
            <div className="text-7xl flex justify-around items-center">
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
            </div>
            <div className="flex items-center">
              <h6 className="uppercase font-bold">Reviews</h6>
              <div className="ms-auto text-xl ">
                <RatingComponent rating={product.productRating} />
              </div>
            </div>
            <div className="flex">
              <h6 className="uppercase font-bold">Price</h6>
              <h6 className="uppercase ms-auto font-bold">
                ${product.productPrice}
              </h6>
            </div>
            <div className="flex">
              <h6 className="uppercase font-bold">Colour</h6>
            </div>
            <div className="text-7xl flex justify-around items-center">
              <FaCircle color="green" />
              <FaCircle color="red" />
              <FaCircle color="orange" />
              <FaCircle color="cyan" />
            </div>
          </div>
        </div>
        <ProductOptionsComponent />
      </section>
    </>
  );
};

export default ProductPage;
