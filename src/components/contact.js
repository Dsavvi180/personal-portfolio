import React from "react";
import paperPlane from "../assets/paper-plane.png";
import linkedIn from "../assets/linkedin-logo.png";

function Contact() {
  return (
    <div
      id="contact"
      className="w-[100%] md:w-[50%] m-auto flex-col justify-center text-center align-middle gap-5 h-[55vh]"
    >
      <h3 className="pb-4 text-xl font-light text-[rgba(85,85,85,255)]">
        Get in Touch
      </h3>
      <h1 className="text-3xl md:text-5xl font-[650]">Contact Me</h1>
      <div className="flex flex-col w-[90vw]  md:flex-row justify-center align-middle mt-10 gap-12 shadow-sm text-center text-xl font-light text-black rounded-[2rem] border-solid border-[2px] p-7 border-[rgba(193,193,193,255)] md:w-[105%] lg:w-[70%] m-auto">
        <div className="flex justify-center align-middle text-center gap-2 font-normal ">
          <img src={paperPlane} width={"35"} />
          <h2 className="pt-1"> Dsavvasavvi18@gmail.com</h2>
        </div>
        <div className="flex justify-center align-middle text-center gap-2 font-normal ">
          <img src={linkedIn} width={"35"} />
          <h2 className="pt-1">LinkedIn</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
