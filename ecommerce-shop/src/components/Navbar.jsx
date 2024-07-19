import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="min-h-[50px] bg-[#F0F0F0] max-h-[50px] flex justify-center items-center w-full overflow-hidden">
        <div className="container flex items-center text-sm uppercase text-black font-bold">
          <div className="p-2 mx-5 font-bold">
            <a href="/">Logo</a>
          </div>
          <div className="mx-5">
            <ul className="flex">
              <a href="/">
                <li className="p-2 mx-2">Home</li>
              </a>
              <a href="/">
                <li className="p-2">|</li>
              </a>
              <a href="/products">
                <li className="p-2 mx-2">Shop</li>
              </a>
            </ul>
          </div>
          <div className=" ms-auto">
            <ul className="flex">
              <a href="/">
                <li className="p-2 mx-2">Register</li>
              </a>
              <a href="/">
                <li className="p-2">|</li>
              </a>
              <a href="/">
                <li className="p-2 rounded-sm mx-2 bg-">Login</li>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
