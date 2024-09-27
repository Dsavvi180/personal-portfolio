import React from "react";
import admin from "../assets/techStackIcons/admin.png";
import cloud from "../assets/techStackIcons/cloud.png";
import css from "../assets/techStackIcons/css.png";
import docker from "../assets/techStackIcons/docker.png";
import haskell from "../assets/techStackIcons/haskell.png";
import html from "../assets/techStackIcons/html.png";
import java from "../assets/techStackIcons/java.png";
import js from "../assets/techStackIcons/js.png";
import linux from "../assets/techStackIcons/linux.png";
import microsoft from "../assets/techStackIcons/microsoft.png";
import python from "../assets/techStackIcons/python.png";
import react from "../assets/techStackIcons/react.png";
import arrow from "../assets/arrow.png";
import check from "../assets/check.png";
import { useState } from "react";

function TechStack() {
  const icons = [
    { src: admin, angle: "0deg" },
    { src: cloud, angle: "30deg" },
    { src: css, angle: "60deg" },
    { src: docker, angle: "90deg" },
    { src: haskell, angle: "120deg" },
    { src: html, angle: "150deg" },
    { src: java, angle: "180deg" },
    { src: js, angle: "210deg" },
    { src: linux, angle: "240deg" },
    { src: microsoft, angle: "270deg" },
    { src: python, angle: "300deg" },
    { src: react, angle: "330deg" },
  ];
  const [show, setShow] = useState(false);

  return (
    <div id="technologies">
      {" "}
      <div
        className={`flex flex-col mb-[200px] ${
          show ? "mt-[1200px] md:mt-[200px]" : "mt-[650px] md:mt-[250px]"
        } h-[65vh] md:mt-[100px] md:flex-row justify-center items-center w-[100vw] md:h-[85vh] my-[100px] tech-banner `}
      >
        <div className="bg-transparent w-[100%] items-center relative">
          <h1 className="tech-stack text-2xl md:text-3xl font-medium text-[rgba(85,85,85,255)]">
            Tech Stack
          </h1>
          <div className="icons">
            {icons.map((icon, index) => (
              <span key={index} style={{ "--degrees": icon.angle }}>
                <img
                  src={icon.src}
                  width="50px"
                  height="50px"
                  alt={`icon-${index}`}
                />
              </span>
            ))}
          </div>
        </div>
        <div
          className={
            !show
              ? "flex-col mb-[40px] md:mx-auto my-[300px]  md:my-0 w-[70%]"
              : "flex-col xs:my-[100px] md:my-40 w-[70%]"
          }
        >
          <h1
            className={
              !show
                ? "text-4xl md:text-6xl font-medium text-center md:w-[20%]"
                : " text-4xl w-[30%] ml-[0%]  md:ml-[0%] mt-[120%] xs:mt-[40%] md:text-6xl md:mt-0 md:mr-5 font-medium text-center md:w-[30%] pb-2 border-b-[4px] border-[rgba(85,85,85,255)] border-opacity-[0.5] "
            }
          >
            Technologies
          </h1>
          <button
            className="ml-[72%] md:ml-[85%] lg:ml-[55%] "
            onClick={() => {
              setShow(!show);
            }}
          >
            <img
              src={arrow}
              width="25px"
              className={!show ? "" : "rotate-90 ml-[90%]"}
            />
          </button>
          <div
            className={!show ? "hidden" : "mb-[600px] md:mb-[0px] md:mr-[20%]"}
          >
            <div className="flex flex-col mx-[0%]  w-[100%] my-[5px] md:flex-row justify-between md:mx-0 md:gap-5 items-center md:my-5 md:w-[100%]">
              <ul className="">
                <h2 className="font-semibold text-lg text-[rgba(85,85,85,255)] mb-1">
                  IT Service Management:
                </h2>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Web Servers</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>MS Office 365 Suite</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>MS Azure</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Identity Management</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>PowerShell</h2>
                </li>
                <h2 className="font-semibold text-lg text-[rgba(85,85,85,255)] mb-1">
                  Web Development:
                </h2>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2></h2>React JS
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2></h2>HTML
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>CSS</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Web Scraping</h2>
                </li>
                <h2></h2>{" "}
              </ul>
              <ul className="mr-[57px] md:mt-[-4px] ">
                <h2 className="font-semibold text-lg text-[rgba(85,85,85,255)] mb-1 mt-1">
                  Programming:
                </h2>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Python</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Java</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>JavaScript</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Bash</h2>
                </li>

                <h2 className="font-semibold text-lg text-[rgba(85,85,85,255)] mb-1 mt-1">
                  DevOps:
                </h2>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Linux</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Web Servers</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Raspberry Pi</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Docker</h2>
                </li>
                <li className="font-extralight text-[rgba(85,85,85,255)] flex gap-1">
                  <img src={check} width="20px" />
                  <h2>Virtual Machines</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-6 h-6 mt-[-40%] ml-[7vw] md:w-10 md:h-10 md:mt-[-10%] mb-[7%] md:ml-[7vw] cursor-pointer">
        <a href="#projects">
          <img
            src={arrow}
            width="80%"
            height="80%"
            className="rotate-90 text-[rgba(193,193,193,255)]"
          />
        </a>
      </div>
    </div>
  );
}

export default TechStack;

//add github, machine learning, webscraping, react native, JDBC
