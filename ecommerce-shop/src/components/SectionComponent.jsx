import React from "react";

const SectionComponent = ({ children }) => {
  return (
    <section className="min-h-[100vh] mx-auto bg-background flex">
      <div className="container min-h-[100%] mx-auto flex flex-col justify-center items-center leading-none p-5">
        {children}
      </div>
    </section>
  );
};

export default SectionComponent;
