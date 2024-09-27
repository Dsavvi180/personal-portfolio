import React from "react";

function Footer() {
  return (
    <div className="w-[100%] md:w-[40%] mx-auto mt-6 flex-col text-center items-center justify-center align-middle h-[20vh]">
      <ul className="w-[80%] h-[25%] mx-auto text-md md:text-[26px] flex justify-between text-center items-center">
        <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
          <a href="banner">About</a>
        </h3>
        <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
          <a href="#about">Experience</a>
        </h3>
        <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
          <a href="#projects">Projects</a>
        </h3>
        <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
          <a href="#technologies">Technologies</a>
        </h3>
      </ul>
      <div className="text-sm md:text-[18px] font-light mt-[43px] text-[rgba(85,85,85,255)]">
        Copyright © 2024 Damen Savvi. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
