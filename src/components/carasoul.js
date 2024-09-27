import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import Cards from "./cards";
import github1 from "../assets/github1.png";
import github2 from "../assets/github2.png";
import github3 from "../assets/github3.png";
import github4 from "../assets/github4.png";
import github5 from "../assets/github5.png";
import github6 from "../assets/github6.png";
import github7 from "../assets/github7.png";
import github8 from "../assets/github8.png";
import github9 from "../assets/github9.png";
import github10 from "../assets/github10.png";

function Carasoul() {
  const [main, setMain] = useState({ left: 0, middle: 1, right: 2 });
  const [dial, setDial] = useState(0);

  function nextCard(direction) {
    if (direction === "left") {
      setMain((prevState) => ({
        left: (prevState.left - 1 + cardsLength) % cardsLength,
        middle: (prevState.middle - 1 + cardsLength) % cardsLength,
        right: (prevState.right - 1 + cardsLength) % cardsLength,
      }));
    } else if (direction === "right") {
      setMain((prevState) => ({
        left: (prevState.left + 1) % cardsLength,
        middle: (prevState.middle + 1) % cardsLength,
        right: (prevState.right + 1) % cardsLength,
      }));
    }
  }
  const websites = [
    {
      image: github1,
      caption: "Car Emporium React App x Three JS ",
      githubLink: "https://github.com/Dsavvi180/CarEmporiumThreeJS",
      liveDemoLink: "https://caremporiumthreejs-5a2ca.web.app/",
    },
    {
      image: github2,
      caption: `Concurrency & Web Workers Demo JavaScript`,
      githubLink: "https://github.com/Dsavvi180/JavaScript-Concurrency-Library",
      liveDemoLink: "https://concurrencyjs.web.app/",
    },
    {
      image: github3,
      caption: "HYPED Society Hyperloop \n Dashboard",
      githubLink: "https://github.com/Dsavvi180/hyped-public-app-personal",
      liveDemoLink: "",
    },
    {
      image: github6,
      caption: "Maths Tutor Website \n",
      githubLink: "",
      liveDemoLink: "https://mathstutor-feae3.web.app/",
    },
  ];
  const webscraping = [
    {
      image: github5,
      caption: "Gene Sequence Processor \n",
      githubLink: "https://github.com/Dsavvi180/sequenceGenWebScraper",
      liveDemoLink: "",
    },
    {
      image: github4,
      caption: `Automated Ticket Categorization for UniDesk `,
      githubLink: "https://github.com/Dsavvi180/Damens-Task-Bot-IT-Services",
      liveDemoLink: "",
    },
    {
      image: github7,
      caption: "Right Move Property Data Scraper",
      githubLink: "https://github.com/Dsavvi180/RightMoveWebScraper",
      liveDemoLink: "",
    },
  ];
  const other = [
    {
      image: github8,
      caption: "Local AI Assistant \n",
      githubLink: "https://github.com/Dsavvi180/localGPT-Assistant",
      liveDemoLink: "",
    },
    {
      image: github9,
      caption: `Docker Container: Embedded VNC Server for Streaming`,
      githubLink: "https://hub.docker.com/r/dsavvas/vnc-server",
      liveDemoLink: "",
    },
    // {
    //   image: github10,
    //   caption: `Car Service Company Mobile App (Coming Soon)`,
    //   githubLink: "",
    //   liveDemoLink: "",
    // },
    {
      image: github7,
      caption: `Raspberry Pi Web Hosting Server`,
      githubLink: "",
      liveDemoLink: "",
    },
  ];
  const allCards = [...websites, ...webscraping, ...other];
  const cardSet = [allCards, websites, webscraping, other];
  const cardsData = cardSet[dial] || [];

  const cards = cardsData.map((data, index) => (
    <Cards
      image={data.image}
      caption={data.caption}
      githubLink={data.githubLink}
      liveDemoLink={data.liveDemoLink}
      position={index === main.middle ? "centre" : ""}
    />
  ));

  const cardsLength = cards ? cards.length : 0;
  if (cardsLength === 0) {
    return (
      <div className="flex justify-center align-middle mt-[10%]">
        No cards available
      </div>
    );
  } else {
    return (
      <div>
        <div className="w-[90%] flex-col justify-center items-center h-auto m-auto ">
          <div className=" justify-center flex gap-3 mb-[-15px]  ">
            <h1
              onClick={() => {
                setDial(0);
                setMain({ left: 0, middle: 1, right: 2 });
              }}
              className={
                dial === 0
                  ? "font-semibold border-b-2 border-b-[rgba(85,85,85,255)] "
                  : "cursor-grab"
              }
            >
              All
            </h1>
            <h1
              onClick={() => {
                setDial(2);
                setMain({ left: 0, middle: 1, right: 2 });
              }}
              className={
                dial === 2
                  ? "font-semibold border-b-2 border-b-[rgba(85,85,85,255)] "
                  : "cursor-grab"
              }
            >
              Web Scraping
            </h1>
            <h1
              onClick={() => {
                setDial(1);
                setMain({ left: 0, middle: 1, right: 2 });
              }}
              className={
                dial === 1
                  ? "font-semibold border-b-2 border-b-[rgba(85,85,85,255)] "
                  : "cursor-grab"
              }
            >
              Websites
            </h1>

            <h1
              onClick={() => {
                setDial(3);
                setMain({ left: 0, middle: 1, right: 2 });
              }}
              className={
                dial === 3
                  ? "font-semibold border-b-2 border-b-[rgba(85,85,85,255)] "
                  : "cursor-grab"
              }
            >
              Other
            </h1>
          </div>
          <div className="w-full p-2 gap-0 flex justify-center align-middle h-auto m-auto md:gap-10 ">
            <button
              className="rotate-180 "
              onClick={() => {
                nextCard("left");
              }}
            >
              <img src={arrow} width="25px" className="ml-2 md:ml-0" />
            </button>

            {cards[main.left]}

            {cards[main.middle]}

            {cards[main.right]}

            <button
              className=""
              onClick={() => {
                nextCard("right");
              }}
            >
              <img src={arrow} width="25px" className="ml-2 md:ml-0" />
            </button>
          </div>
        </div>
        <div className=" w-5 h-5 mt-[3%] ml-[7vw] md:w-10 md:h-10 md:mt-[-2%] md:ml-[7vw] cursor-pointer">
          <a href="#contact">
            {" "}
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
}

export default Carasoul;
