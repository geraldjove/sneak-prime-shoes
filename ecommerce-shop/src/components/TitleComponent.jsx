import React from "react";

const TitleComponent = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  backgroundText = "Background",
}) => {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <h1 className="z-10 font-black leading-none">{title}</h1>
      <h3 className="uppercase font-bold text-sm z-10 leading-none">
        {subtitle}
      </h3>
      <h1 className="uppercase font-black opacity-5 absolute tracking-widest text-[10rem] leading-none">
        {backgroundText}
      </h1>
    </div>
  );
};

export default TitleComponent;
