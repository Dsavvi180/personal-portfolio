import React from "react";
import { useState, useEffect } from "react";
import hamburger from "../assets/hamburger.png";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
        setDisplay(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" text-3xl px-[40px] sm:px-[80px] md:px-[120px] md:text-4xl lg:px-[180px] py-[50px] flex justify-between navbar">
      <h1>Damen Savvi</h1>
      {show ? (
        <ul className=" text-2xl w-[47%] pr-[5%] flex justify-between gap-[7%] navbar-list">
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
            <a href="#contact">Contact</a>
          </h3>
        </ul>
      ) : (
        <div>
          <img
            src={hamburger}
            width="40"
            onClick={() => {
              setDisplay(!display);
            }}
            className={display ? "hidden" : ""}
          />
          <ul
            className={
              display
                ? "text-2xl w-[47%] pr-[1%] flex-col justify-between gap-[7%] navbar-list cursor-pointer"
                : "text-2xl w-[47%] pr-[5%] flex-col justify-between gap-[7%] navbar-list cursor-pointer hidden"
            }
          >
            <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
              <a href="/About">About</a>
            </h3>
            <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
              Experience
            </h3>
            <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
              Projects
            </h3>
            <div className="flex gap-[35px]">
              <h3 className="hover:border-b-2 border-[rgba(85,85,85,255)] ">
                Contact
              </h3>
              <div
                className="pt-2 cursor-grab"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                ^
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
