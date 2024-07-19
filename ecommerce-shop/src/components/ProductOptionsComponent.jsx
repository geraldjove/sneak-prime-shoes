import React from "react";
import {
  FaRegHeart,
  FaPlayCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
const ProductOptionsComponent = () => {
  return (
    <>
      <section className=" min-h-[100px] w-full ">
        <div className="container mx-auto min-h-[100px] max-w-[50%] bg-gray-200 rounded-xl justify-center items-center grid sm:grid-cols-4">
          <div className="flex justify-around items-center">
            <FaPlayCircle className="text-2xl" />

            <h5>Play Video</h5>
          </div>
          <div className="flex justify-around text-xl">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
          <div className="flex justify-around items-center">
            <h5>01</h5>
            <BsDashLg className="text-3xl" />
            <BsDashLg className="text-3xl" />
            <h5>04</h5>
          </div>
          <div className="flex justify-around items-center">
            <a href="/">
              <button className="bg-black text-white p-3 rounded-sm uppercase">
                Add to Cart
              </button>
            </a>
            <FaRegHeart className="text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOptionsComponent;
