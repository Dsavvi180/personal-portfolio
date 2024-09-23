import React from "react";

function Cards(props) {
  return (
    <div
      key={props.index}
      className={`flex-col w-[300px] p-1 shadow-xl justify-center items-center align-middle text-center card rounded-xl border-solid border-[2px] border-[rgba(193,193,193,255)] my-10 h-[450px] ${
        props.position === "centre"
          ? " h-[465px] w-[280px] md:h-[465px] md:w-[315px]"
          : "hidden md:block"
      }`}
    >
      <div className="p-3 flex-col justify-center align-middle">
        {" "}
        <img
          src={props.image}
          width="400"
          className="object-scale-down w-[210px] m-auto h-[220px]"
        />
        <h3 className="py-4 text-xl font-light text-[rgba(85,85,85,255)]">
          {props.caption.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h3>
      </div>
      <div className="flex justify-center  gap-3 p-5 text-sm font-semibold mb-[-20%]">
        <button className="w-[130px] p-3 rounded-full border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-[rgba(53,53,53,255)] hover:text-white">
          Github
        </button>
        <button className="w-[130px] p-3 rounded-full text-white bg-[rgba(53,53,53,255)] border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-black">
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default Cards;
