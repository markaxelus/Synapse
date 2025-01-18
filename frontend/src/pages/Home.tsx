import React, { useEffect } from "react";
import Logo from "../assets/MindMap.png";
import ArrowDown from "../assets/arrow-down.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      id="home"
      className="flex justify-center items-center pb-[2rem] h-[110vh] flex-col space-y-12 text-center"
    >
      <h1 className="font-bold text-4xl">Welcome to Link</h1>
      <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />

      <div className="font-bold">
        <p>
          Discover a faster, clearer way to learn! Upload PDFs and watch them <br />
          transform into easy-to-understand diagrams designed for visual thinkers
        </p>
      </div>

      <button
        className="border-2 border-black px-14 py-2 rounded-lg text-white bg-primary"
        onClick={() => navigate("")}
      >
        Generate a Diagram
      </button>

      <div className="pt-12">
        <a href="#process">
          <button className="border-2 border-black p-3 rounded-full">
            <img
              src={ArrowDown}
              alt="arrow-down"
              className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-60 hover:translate-y-1"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
