import React from "react";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-6rem)] bg-[#111111] flex flex-col justify-between items-center ">
        <div className="  flex flex-col gap-8 pt-16 items-center justify-center">
          <h1 className="text-[#EEEEEE] sm:text-9xl text-6xl font-cinzel-decorative">
            THE INNER
          </h1>
          <h1 className="text-[#EEEEEE]  sm:text-9xl text-7xl font-cinzel-decorative">
            CIT<span className="text-[#8cfc88]">A</span>DEL
          </h1>
        </div>
        <div className="flex flex-col gap-4 pb-7 items-center  justify-around ">
          <div className="flex flex-col  items-center justify-center">
            <h1 className="text-3xl text-[#EEEEEE] font-cinzel tracking-[8px]">
              ABHIJIT THANDER
            </h1>
            <h1 className="text-2xl text-[#DCDCDC] font-cinzel tracking-[8px]">
              Frontend Developer
            </h1>
          </div>
          <hr className="text-[#2e2e2e] w-20 " />
          <div className="flex gap-6 ">
            <Link
              target="blank"
              to={"https://github.com/Abhijit-Thander"}
              className="cursor-pointer  transition-all duration-300 ease-in  hover:text-[#DCDCDC]  text-[#676767] text-sm tracking-tight font-cinzel"
            >
              Github
            </Link>
            <Link
              target="blank"
              to={"https://www.linkedin.com/in/abhijit-thander-b87386242"}
              className="cursor-pointer transition-all duration-300 ease-in hover:text-[#DCDCDC]  text-[#676767] text-sm tracking-tight font-cinzel"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
      {/* <Experiences />
      <Skills />
      <Projects />
      <Contact /> */}
    </>
  );
};

export default Home;
