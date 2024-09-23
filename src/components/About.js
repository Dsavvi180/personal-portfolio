import React from "react";
import UoE from "../assets/UoE.png";
import educationIcon from "../assets/educationIcon.png";
import experienceIcon from "../assets/experienceIcon.png";
import arrow from "../assets/arrow.png";

function About() {
  return (
    <div className="flex-col justify-center w-[100vw] h-[73vh] mt-[10%] mb-[0px]">
      <div className="flex-col text-center mb-[7%]">
        <h3 className="pb-4 text-lg md:text-xl font-light text-[rgba(85,85,85,255)]">
          Behind the scenes:
        </h3>
        <h1 className="pb-5 text-2xl md:text-4xl font-semibold">
          {" "}
          Academics to Algorithms
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-[70%] mx-auto gap-[10%] justify-center items-center">
        <div className="w-[40vw] mb-[45px] md:w-[110vw]">
          <img src={UoE} width="100%" height={"100%"} />
        </div>

        <div className="flex-col">
          <div className="flex justify-center align-middle gap-[5%] md:gap-[10%]">
            <div className="flex flex-col text-center w-[100%] rounded-2xl border-solid border-[2px] border-[rgba(193,193,193,255)] py-10 px-5 flex-grow">
              <img
                src={experienceIcon}
                width={50}
                height={50}
                className="mx-auto pb-[12.5px]"
              />
              <h1 className="text-lg font-semibold text-center mb-2">
                Experience
              </h1>
              <h3 className="text-[rgba(53,53,53,255)] font-extralight">
                1 year +
              </h3>
              <h3 className="text-[rgba(53,53,53,255)] font-medium">
                IT Service Management
              </h3>
              <h3 className="text-[rgba(53,53,53,255)] font-extralight">
                2 years +
              </h3>
              <h3 className="text-[rgba(53,53,53,255)] font-medium">
                Front End development
              </h3>
            </div>

            <div className="flex flex-col text-center w-[100%] rounded-2xl border-[2px] border-[rgba(193,193,193,255)] py-10 px-5 flex-grow">
              <img
                src={educationIcon}
                width={50}
                height={50}
                className="mx-auto"
              />
              <h1 className="text-lg font-semibold text-center mb-2">
                Education
              </h1>
              <h3 className="text-[rgba(53,53,53,255)] font-extralight">
                2nd year
              </h3>
              <h3 className="text-[rgba(53,53,53,255)] font-medium">
                Computer Science & Mathematics
              </h3>
              <h3 className="text-[rgba(53,53,53,255)] font-extralight">
                The University of Edinburgh
              </h3>
            </div>
          </div>

          <p className="mt-10 text-[rgba(53,53,53,255)] font-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
      <div className=" w-6 h-6 mt-[3%] ml-[7vw] md:w-10 md:h-10 md:mt-[-2%] md:ml-[7vw] cursor-pointer">
        <img
          src={arrow}
          width="80%"
          height="80%"
          className="rotate-90 text-[rgba(193,193,193,255)]"
        />
      </div>
    </div>
  );
}

export default About;
