import React from "react";
import { FaStar } from "react-icons/fa";

const RatingComponent = ({ rating }) => {
  return (
    <>
      <div className="absolute">
        {/* <div className="flex">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <FaStar className="text-gray-300" />
            </span>
          ))}
        </div> */}
        <div className="flex">
          {[...Array(rating)].map((_, index) => (
            <div key={index} className="flex">
              <span>
                <FaStar className="text-yellow-500" />
                <span>
                  <FaStar className="text-gray-500" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingComponent;
