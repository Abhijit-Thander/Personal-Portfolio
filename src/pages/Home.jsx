// import React from "react";
// import Experiences from "./Experiences";
// import Skills from "./Skills";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
// import { Link } from "react-router";

// const Home = () => {
//   return (
//     <>
//       <div className="h-[calc(100vh-6rem)] bg-[#111111] flex flex-col  justify-between items-center ">
//         <div className="flex flex-col  pt-12 items-center justify-center  ">
//           <h1 className="text-[#EEEEEE] sm:text-[9vw] text-[15vw] font-cinzel-decorative ">
//             THE INNER
//           </h1>
//           <h1 className="text-[#EEEEEE]  sm:text-[8vw] text-7xl font-cinzel-decorative">
//             CIT<span className="text-[#8cfc88]">A</span>DEL
//           </h1>
//         </div>
//         <div className="flex flex-col gap-4 pb-7 items-center justify-around   ">
//           <div className="flex flex-col  items-center justify-center">
//             <h1 className="sm:text-3xl text-[6vw] text-[#EEEEEE] font-cinzel tracking-[8px]">
//               ABHIJIT THANDER
//             </h1>
//             <h1 className="sm:text-2xl text-[4vw] text-[#dcdcdcbb] font-cinzel tracking-[4px]">
//               Frontend Developer
//             </h1>
//           </div>
//           <hr className="text-[#2e2e2e] w-20 " />
//           <div className="flex gap-6 ">
//             <Link
//               target="blank"
//               to={"https://github.com/Abhijit-Thander"}
//               className="cursor-pointer  transition-all duration-300 ease-in  hover:text-[#DCDCDC]  text-[#676767] text-sm tracking-tight font-cinzel"
//             >
//               Github
//             </Link>
//             <Link
//               target="blank"
//               to={"https://www.linkedin.com/in/abhijit-thander-b87386242"}
//               className="cursor-pointer transition-all duration-300 ease-in hover:text-[#DCDCDC]  text-[#676767] text-sm tracking-tight font-cinzel"
//             >
//               Linkedin
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="min-h-[calc(100svh-6rem)] bg-[#111111] flex flex-col justify-center lg:justify-between items-center px-4 py-10 sm:py-8 gap-16 sm:gap-20">
        <div className="flex flex-col items-center justify-center pt-8 text-center">
          <h1 className="text-[#EEEEEE] text-[15vw] xs:text-[12vw] sm:text-6xl md:text-9xl lg:text-[9vw] font-cinzel-decorative leading-tight">
            THE INNER
          </h1>
          <h1 className="text-[#EEEEEE] text-[13vw] xs:text-[12vw] sm:text-6xl md:text-8xl lg:text-[8vw] font-cinzel-decorative leading-tight">
            CIT<span className="text-[#8cfc88]">A</span>DEL
          </h1>
        </div>

        <div className="flex flex-col gap-8 sm:gap-4 items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-2">
            <h1 className="text-lg sm:text-2xl md:text-4xl text-[#EEEEEE] font-cinzel tracking-[4px] sm:tracking-[8px]">
              ABHIJIT THANDER
            </h1>
            <h1 className="text-sm sm:text-xl md:text-3xl text-[#dcdcdcbb] font-cinzel tracking-[2px] sm:tracking-[2px]">
              Frontend Developer
            </h1>
          </div>
          <hr className="text-[#2e2e2e] w-20" />
          <div className="flex gap-6">
            <Link
              target="_blank"
              to={"https://github.com/Abhijit-Thander"}
              className="cursor-pointer transition-all duration-300 ease-in hover:text-[#DCDCDC] text-[#676767] sm:text-sm tracking-tight font-cinzel"
            >
              Github
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/abhijit-thander-b87386242"}
              className="cursor-pointer transition-all duration-300 ease-in hover:text-[#DCDCDC] text-[#676767] sm:text-sm tracking-tight font-cinzel"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
