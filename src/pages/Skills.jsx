// import React from "react";
// import PillerTop from "../assets/pilerTop.svg";
// import PillerBottom from "../assets/pilerBottom.svg";
// import bg from "../assets/skillBg.png";
// import { Database, Table2, Wrench } from "lucide-react";

// const Skills = () => {
//   return (
//     <div
//       className=" bg-[#0f0f0f] w-full p-6 sm:px-16 pt-20 pb-20 min-h-screen bg-cover   "
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="flex flex-col gap-3 h-full items-center justify-center ">
//         <h1 className="text-4xl text-center text-[#F0F0F0] font-cinzel-decorative">
//           Foundations
//         </h1>
//         <h1 className="text-center  font-cinzel text-md tracking-[3px] text-[#888787]">
//           " The strength of the structure lies in the <br /> integrity of its
//           base; mastery is but logic applied <br /> with discipline. "
//         </h1>
//         <hr className="text-[#2e2e2e] w-28 mt-6 " />
//       </div>

//       <div className="flex-wrap gap-6 flex sm:justify-between mt-14 sm:[&>*:nth-child(2)]:mt-24 ">
//         {/* 1st Piller */}
//         <div className="flex flex-col items-center ">
//           <img src={PillerTop} alt="" className="w-90" />
//           <div className="h-90 w-66 border-2 border-[#A1A1A1] p-8 flex-col flex  justify-between ">
//             <h1 className="font-cinzel-decorative text-[#F0F0F0] text-2xl">
//               <Table2 className=" text-[#888787] mb-2" size={26} /> Frontend
//             </h1>
//             <ul className="list-none ">
//               <li className="text-[#888787] font-mono tracking-wider text-md list-disc">
//                 React / Next
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Redux
//               </li>
//               <li className="text-[#888787] font-mono   tracking-wider text-md list-disc">
//                 Javascript
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Tailwind
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Typescript
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Booststrap
//               </li>
//             </ul>
//             <div className="w-full h-1 rounded-md bg-amber-50"></div>
//           </div>
//           <img src={PillerBottom} alt="" className="w-90" />
//         </div>

//         {/* 2nd Piller */}

//         <div className="flex flex-col items-center  ">
//           <img src={PillerTop} alt="" className="w-90" />
//           <div className="h-90 w-66 border-2 border-[#A1A1A1]  p-8 flex-col flex justify-between ">
//             <h1 className="font-cinzel-decorative text-[#F0F0F0] text-2xl">
//               <Wrench className=" text-[#888787] mb-2" size={26} /> Tools
//             </h1>
//             <ul>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Git
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Github
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Postman
//               </li>
//               <li className="text-[#888787] font-mono text-md  tracking-wider list-disc">
//                 Gsap
//               </li>
//               <li className="text-[#888787] font-mono text-md  tracking-widest list-disc">
//                 Motion
//               </li>
//             </ul>
//             <div className="w-full  h-1 rounded-md bg-amber-50"></div>
//           </div>
//           <img src={PillerBottom} alt="" className="w-90" />
//         </div>

//         {/* 3rd Piller */}
//         <div className="flex flex-col items-center ">
//           <img src={PillerTop} alt="" className="w-90" />
//           <div className="h-90 w-66 border-2 border-[#A1A1A1]  p-8 flex-col flex justify-between">
//             <h1 className="font-cinzel-decorative text-[#F0F0F0] text-2xl">
//               <Database className=" text-[#888787] mb-2" size={26} />
//               Backend
//             </h1>
//             <ul>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Node
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Express
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Sql
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 Mongodb
//               </li>
//               <li className="text-[#888787] font-mono  tracking-wider text-md list-disc">
//                 supabase
//               </li>
//             </ul>
//             <div className="w-full  h-1 rounded-md bg-amber-50"></div>
//           </div>
//           <img src={PillerBottom} alt="" className="w-90" />
//         </div>
//       </div>

//       <div className="bg-[#0f0f0f] sm:h-70  mt-20  ">
//         <hr className="h-0.5 border-[#3a3a3a] w-full" />
//         <div className="sm:flex items-center sm:justify-between gap-6  sm:gap-10  sm:h-full">
//           <div className="w-96 flex flex-col sm:gap-4 mt-4">
//             <h1 className="text-2xl font-cinzel-decorative text-[#F0F0F0]">
//               Founndation Craft
//             </h1>
//             <p className=" text-[#888787] font-cinzel text-md">
//               I don't just look at frontend as making things preety. I've
//               learned that how you structure your code matters more than the
//               looks. I fpcused on building components & layouts that are easy to
//               scale & avoid a mess.
//             </p>
//           </div>
//           <div className="flex flex-col sm:gap-4 mt-4 w-96">
//             <h1 className="font-cinzel-decorative text-2xl text-[#F0F0F0]">
//               The Aesthetic of logic
//             </h1>
//             <p className=" text-[#888787] font-cinzel text-md">
//               I love systems that just work. I try to keep the logic as simple
//               and readable as possible. To me, "Clean code" isn't a buzzword.
//               It's about making sure that when a teammate or my feature self
//               looks at my work, they actuallu understand what's going on.
//             </p>
//           </div>
//           <div className="flex flex-col sm:gap-4 mt-4  w-96">
//             <h1 className="font-cinzel-decorative text-2xl text-[#F0F0F0]">
//               Resilient devivery
//             </h1>
//             <p className=" text-[#888787] font-cinzel text-md">
//               The web is unpredictable, so i build stuff that can handle it. My
//               goal is to deliver projects that dont't just look good on my
//               machine, but actually perform well fro the people using them, any
//               time.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import PillerTop from "../assets/pilerTop.svg";
import PillerBottom from "../assets/pilerBottom.svg";
import bg from "../assets/skillBg.png";
import { Database, Table2, Wrench } from "lucide-react";

const Skills = () => {
  return (
    <div
      className="bg-[#0f0f0f] w-full px-4 sm:px-8 md:px-16 py-16 sm:py-20 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col gap-3 h-full items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl text-[#F0F0F0] font-cinzel-decorative">
          Foundations
        </h1>
        <h1 className="font-cinzel text-sm sm:text-md tracking-[2px] sm:tracking-[3px] text-[#888787] max-w-md sm:max-w-none leading-relaxed">
          "The strength of the structure lies in the
          <span className="hidden sm:inline">
            <br />
          </span>{" "}
          integrity of its base; mastery is but logic applied
          <span className="hidden sm:inline">
            <br />
          </span>{" "}
          with discipline."
        </h1>
        <hr className="text-[#2e2e2e] w-28 mt-6" />
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 mt-14 place-items-center">
        {/* 1st Pillar */}
        <div className="flex flex-col items-center w-full max-w-78">
          <img src={PillerTop} alt="" className="w-full" />
          <div className="min-w-58 min-h-85 border-2 border-[#A1A1A1] p-6 sm:p-8 flex-col flex justify-between">
            <h1 className="font-cinzel-decorative text-[#F0F0F0] text-xl sm:text-2xl flex flex-col gap-2">
              <Table2 className="text-[#888787]" size={26} /> Frontend
            </h1>
            <ul className="list-none space-y-1">
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                React / Next
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Redux
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Javascript
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Tailwind
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Typescript
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Bootstrap
              </li>
            </ul>
            <div className="w-full h-1 rounded-md bg-amber-50 mt-4"></div>
          </div>
          <img src={PillerBottom} alt="" className="w-full" />
        </div>

        {/* 2nd Pillar */}
        <div className="flex flex-col items-center w-full max-w-78 sm:mt-0 lg:mt-24">
          <img src={PillerTop} alt="" className="w-full" />
          <div className="min-w-58 min-h-85 border-2 border-[#A1A1A1] p-6 sm:p-8 flex-col flex justify-between">
            <h1 className="font-cinzel-decorative text-[#F0F0F0] text-xl sm:text-2xl flex flex-col gap-2">
              <Wrench className="text-[#888787]" size={26} /> Tools
            </h1>
            <ul className="list-none space-y-1">
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Git
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Github
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Postman
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Gsap
              </li>
              <li className="text-[#888787] font-mono tracking-widest text-sm sm:text-md list-disc">
                Motion
              </li>
            </ul>
            <div className="w-full h-1 rounded-md bg-amber-50 mt-4"></div>
          </div>
          <img src={PillerBottom} alt="" className="w-full" />
        </div>

        {/* 3rd Pillar */}
        <div className="flex flex-col items-center w-full max-w-78">
          <img src={PillerTop} alt="" className="w-full" />
          <div className="min-w-58 min-h-85 border-2 border-[#A1A1A1] p-6 sm:p-8 flex-col flex justify-between">
            <h1 className="font-cinzel-decorative text-[#F0F0F0] text-xl sm:text-2xl flex flex-col gap-2">
              <Database className="text-[#888787]" size={26} /> Backend
            </h1>
            <ul className="list-none space-y-1">
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Node
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Express
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Sql
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Mongodb
              </li>
              <li className="text-[#888787] font-mono tracking-wider text-sm sm:text-md list-disc">
                Supabase
              </li>
            </ul>
            <div className="w-full h-1 rounded-md bg-amber-50 mt-4"></div>
          </div>
          <img src={PillerBottom} alt="" className="w-full" />
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#0f0f0f] mt-20">
        <hr className="h-0.5 border-[#3a3a3a] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-cinzel-decorative text-[#F0F0F0]">
              Foundation Craft
            </h1>
            <p className="text-[#888787] font-cinzel text-sm sm:text-md leading-relaxed">
              I don't just look at frontend as making things pretty. I've
              learned that how you structure your code matters more than the
              looks. I focused on building components & layouts that are easy to
              scale & avoid a mess.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-cinzel-decorative text-[#F0F0F0]">
              The Aesthetic of Logic
            </h1>
            <p className="text-[#888787] font-cinzel text-sm sm:text-md leading-relaxed">
              I love systems that just work. I try to keep the logic as simple
              and readable as possible. To me, "Clean code" isn't a buzzword.
              It's about making sure that when a teammate or my future self
              looks at my work, they actually understand what's going on.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-cinzel-decorative text-[#F0F0F0]">
              Resilient Delivery
            </h1>
            <p className="text-[#888787] font-cinzel text-sm sm:text-md leading-relaxed">
              The web is unpredictable, so I build stuff that can handle it. My
              goal is to deliver projects that don't just look good on my
              machine, but actually perform well for the people using them, any
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
