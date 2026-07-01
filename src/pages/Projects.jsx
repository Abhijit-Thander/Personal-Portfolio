import React from "react";
import house from "../assets/projecthouse.svg";
import waffle from "../assets/waffle.png";
import yt from "../assets/ytProject.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#EFEFEF] ">
      <div>
        <img src={house} alt="" />
        <h1 className="font-cinzel-decorative text-4xl my-3 mb-6">
          SELECTED WORKS
        </h1>
      </div>
      <div className="sm:flex justify-around w-full h-full [&>*:nth-child(2)]:mt-20">
        <div className="w-[45%]">
          <img
            src={yt}
            alt=""
            className=" w-full shadow-lg h-90 cursor-pointer rounded-md  "
          />
          <h1 className="mt-4 font-cinzel-decorative text-xl">YOUTUBE CLONE</h1>
          <p className="font-cinzel text-md text-[#888787]">
            Youtube Clone Website using Youtube api.{" "}
          </p>
          <div className="flex gap-2 py-2">
            <div className="border px-2 bg-[#E6E6E6] text-md  border-[#a1a1a1] font-cinzel text-[#888787] ">
              react
            </div>
            <div className="border px-2 bg-[#E6E6E6] text-md  border-[#a1a1a1] font-cinzel text-[#888787] ">
              tailwind Css
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={waffle}
            alt=""
            className="w-full h-90 cursor-pointer rounded-md shadow-lg "
          />
          <h1 className="mt-4  font-cinzel-decorative text-xl">WAFFLE CLONE</h1>
          <p className="font-cinzel text-md text-[#888787]">
            Waffle Clone Website using React and Tailwind CSS.
          </p>
          <div className="flex gap-2 py-2 w-full">
            <div className="border px-3 bg-[#E6E6E6] text-md  border-[#a1a1a1] font-cinzel  text-[#888787] ">
              html
            </div>
            <div className="border px-3 bg-[#E6E6E6] text-md  border-[#a1a1a1] font-cinzel  text-[#888787] ">
              css
            </div>
            <div className="border px-3 bg-[#E6E6E6] text-md  border-[#a1a1a1] font-cinzel  text-[#888787] ">
              locomotive scroll
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <Link
          to={"https://github.com/Abhijit-Thander"}
          target="blank"
          className=" cursor-pointer text-xl flex items-center gap-2 font-cinzel-decorative text-[#141414] px-10 py-4 border border-[#141414] tracking-[0.2em] hover:bg-[#0F0F0F] hover:text-[#DCDCDC] transition-all duration-300"
        >
          VIEW MORE ON GITHUB
          <span>
            <ArrowRight size={22} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
