import React from "react";

import Carasoul from "./carasoul";
import Cards from "./cards";

function Projects() {
  

  return (
    <div className="flex-col justify-center align-middle h-[85vh] projects mb-[200px]">
      <div className="flex-col text-center mb-[2.5%] titles">
        <h3 className="pb-4 text-xl font-light text-[rgba(85,85,85,255)]">
          Browse My Exhibition of
        </h3>
        <h1 className="text-4xl font-semibold">Projects</h1>
      </div>
      <Carasoul  />
    </div>
  );
}

export default Projects;

// <div className=" flex justify-center align-middle gap-[3%] flex-wrap project-cards">
// {cards.map((card) => {
//   return (
//     <div className="flex-col justify-center align-middle text-center card rounded-2xl border-solid border-[2px] border-[rgba(193,193,193,255)] h-auto p-6 mb-10 w-[480px]">
//       {" "}
//       <img
//         src={card.image}
//         width="500"
//         className="rounded-2xl border-solid border-[2px] w-[420px] h-[300px]"
//       />
//       <h3 className="py-4 text-xl font-light text-[rgba(85,85,85,255)]">
//         {card.caption}
//       </h3>
//       <div className="flex justify-center gap-3 p-5 text-sm font-semibold">
//         {" "}
//         <button className="w-[130px] p-3 rounded-full border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-[rgba(53,53,53,255)] hover:text-white">
//           Github
//         </button>
//         <button className="w-[130px] p-3 rounded-full text-white bg-[rgba(53,53,53,255)] border-solid border-[1.5px] border-[rgba(53,53,53,255)] hover:bg-black">
//           Live Demo
//         </button>{" "}
//       </div>
//     </div>
//   );
// })}
// </div>
