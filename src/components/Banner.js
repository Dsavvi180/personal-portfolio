import React from "react";
import profile from "../assets/profile.JPG";
import github from "../assets/github-icon.svg";
import linkedIn from "../assets/linkedin-app-icon.svg";
import { useEffect, useState } from "react";
import TechStack from "./TechStack";

function Banner() {
  const [show, setShow] = useState(""); // The current title being typed
  const [index, setIndex] = useState(0); // Index to track the current title
  const [displayText, setDisplayText] = useState(""); // The text currently displayed letter by letter
  const [letterIndex, setLetterIndex] = useState(0); // Index to track the current letter in the title

  const titles = [
    "Software Developer",
    "Mathematical Analyst",
    "IT Service Management",
  ];

  useEffect(() => {
    setShow(titles[index % titles.length]); // Update `show` with the current title whenever `index` changes
    setDisplayText(""); // Reset display text for new title
    setLetterIndex(0); // Reset letter index for new title
  }, [index]);

  useEffect(() => {
    // Create a typing effect for each letter in the current title
    if (letterIndex < show.length) {
      const typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + show[letterIndex]); // Append the next letter to `displayText`
        setLetterIndex((prevIndex) => prevIndex + 1); // Move to the next letter
      }, 200);

      return () => clearInterval(typingInterval); // Cleanup on component unmount or when dependencies change
    } else {
      // When the full title has been displayed
      if (show.length > 0) {
        const nextTitleTimeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1); // Move to the next title after a pause
        }, 2000);

        return () => clearTimeout(nextTitleTimeout); // Cleanup the timeout
      }
    }
  }, [letterIndex, show]);

  return (
    <div id="banner" className="flex flex-col w-full mb-[130px] md:flex-row justify-center items-center h-[65vh] gap-[3%] mt-[38px] md:mb-[150px] relative">
      <img
        src={profile}
        width="100"
        height="100"
        className="rounded-full object-cover object-top w-[45vw] h-[41%] sm:w-[26vw] sm:h-[40%] md:w-[25vw] md:h-[45%] lg:w-[26vw] lg:h-[65%] xl:h-[75%]"
      />

      <div className=" text-center w-[30%] pt-5">
        <div className="flex flex-col items-center justify-center">
          <h3 className="pb-2 sm:text-sm md:text-md font-bold text-[rgba(85,85,85,255)]">
            Hello, I'm
          </h3>
          <h1 className="pb-3 text-4xl md:text-5xl font-semibold">Damen</h1>

          <h2 className="h-10 text-2xl md:text-3xl text-center font-bold text-[rgba(85,85,85,255)]">
            {displayText}
          </h2>
        </div>

        <div className="flex w-full justify-center gap-3 text-xs md:text-sm font-semibold pt-12 pb-6 lg:p-5 ">
          <button className="px-7 py-1 w-[130px] md:p-3 rounded-full border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-[rgba(53,53,53,255)] hover:text-white">
            Download CV
          </button>
          <button className="px-7 py-1 w-[130px] md:p-3 rounded-full text-white bg-[rgba(53,53,53,255)] border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-black">
            Contact Info
          </button>
        </div>
        <div className="flex justify-center gap-3 mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 640 640"
          >
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 509.64"
            width="30"
            height="30"
          >
            <rect width="512" height="509.64" rx="115.61" ry="115.61" />
            <path
              fill="#fff"
              d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Banner;
