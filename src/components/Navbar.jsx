import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position > 50px, reduce navbar height
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex w-full  bg-[#101010] justify-between border-b border-[#393939] items-center px-6 sticky top-0  ${isScrolled ? "h-18  bg-[#151515]" : "h-26"} transition-all duration-550 ease-in-out z-50`}
    >
      <Link
        to={"/"}
        className="sm:text-3xl sm:font-bold font-cinzel-decorative text-[#E3E3E3] text-4xl"
      >
        <span className="text-[#8cfc88]">A.</span>T.
      </Link>
      <div className="sm:flex sm:gap-10 hidden ">
        <Link className="font-cinzel  text-md text-[#888787] hover:text-[#E3E3E3] transition-all duration-400 ease-in-out tracking-[2px] font-semibold">
          Projects
        </Link>
        <Link
          className="font-cinzel text-md text-[#888787] hover:text-[#E3E3E3] tracking-[2px] font-semibold"
          // to={"/skills"}
        >
          Skills
        </Link>
        <Link
          className="font-cinzel text-md text-[#888787] hover:text-[#E3E3E3] tracking-[2px] font-semibold"
          // to={"/about"}
        >
          About
        </Link>
        <Link
          className="font-cinzel text-md text-[#888787] hover:text-[#E3E3E3] tracking-[2px] font-semibold"
          // to={"/contacts"}
        >
          Contact
        </Link>
      </div>
      <Mail color="#888787" className="cursor-pointer" size={26} />
    </nav>
  );
};

export default Navbar;
