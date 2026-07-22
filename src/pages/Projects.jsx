import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import house from "../assets/projecthouse.svg";
import waffle from "../assets/waffle.png";
import DentalClinic from "../assets/DentalClinic.png";
import Odisej from "../assets/Odisej.png";
import SwiftCart from "../assets/SwiftCart.png";
import Pokedex from "../assets/Pokedex.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Sakthi Dental Clinic",
    description: "Dental Clinic Website using React and Tailwind CSS.",
    tags: ["react", "Gsap", "ScrollTrigger"],
    image: DentalClinic,
    link: "https://sakthimentalmental.netlify.app",
  },

  {
    title: "Pokedex",
    description: "Pokedex Website using React and Pokemon Api.",
    tags: ["react", "tailwind css"],
    image: Pokedex,
    link: "https://pokedex-searchpokemon.netlify.app",
  },
  {
    title: "SwiftCart - Ecommerce Website",
    description: "Ecommerce Website using React and Tailwind CSS.",
    tags: ["react", "tailwind css"],
    image: SwiftCart,
    link: "https://shadowfoxecommerce.netlify.app",
  },
  {
    title: "Hotel Odisej - Mljet Island Hotel",
    description: "Hotel Website using React and Tailwind CSS .",
    tags: ["html", "css", "locomotive scroll"],
    image: Odisej,
    link: "https://hotel-odisej-clone-avi.netlify.app",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null); // the overflow-hidden viewport around the track
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!section || !wrapper || !track) return;

    const ctx = gsap.context(() => {
      // Measure against the wrapper's own visible width (accounts for its
      // padding), not the full section — otherwise the last card gets cut
      // off because the scroll distance is calculated too short.
      const getScrollDistance = () =>
        Math.max(track.scrollWidth - wrapper.clientWidth, 0);

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
      });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (projects.length - 1));
          setActive(index);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Manual arrow navigation — jumps the ScrollTrigger's scroll position
  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    const st = scrollTriggerRef.current;
    if (!st) return;
    const targetScroll =
      st.start + (st.end - st.start) * (clamped / (projects.length - 1));
    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#EFEFEF] p-4 sm:p-10 flex flex-col"
    >
      {/* Header */}
      <div className="shrink-0">
        <img src={house} alt="" className="h-10" />
        <h1 className="font-cinzel-decorative text-4xl my-3 mb-6">
          SELECTED WORKS
        </h1>
      </div>

      {/* Horizontal track — takes remaining space, cards centered within it */}
      <div
        ref={wrapperRef}
        className="flex-1 min-h-0 flex  items-center overflow-hidden py-10 px-6"
      >
        <div ref={trackRef} className="flex items-start gap-10 sm:gap-16 w-max">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          {/* Trailing spacer so the last card fully clears the wrapper's
              right padding instead of stopping flush against it */}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Static CTA — sits below the cards, does NOT scroll with the track */}
      <div className="shrink-0 flex   flex-col items-center justify-center py-10 sm:pb-4">
        <Link
          to={"https://github.com/Abhijit-Thander"}
          target="_blank"
          className="cursor-pointer text-xl flex items-center gap-2 font-cinzel-decorative text-[#141414] px-10 py-4 border border-[#141414] tracking-[0.2em] hover:bg-[#0F0F0F] hover:text-[#DCDCDC] transition-all duration-300"
        >
          VIEW MORE ON GITHUB
          <span>
            <ArrowRight size={22} />
          </span>
        </Link>
      </div>

      {/* Progress dots — bottom left */}
      <div className="absolute bottom-4 left-4 sm:left-10 flex gap-2 z-10">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[#141414]" : "w-1.5 bg-[#a1a1a1]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[85vw] sm:w-[38vw] shrink-0 group"
    >
      {/* Framed image with hover reveal */}

      <div className="relative h-80 overflow-hidden rounded-sm border border-[#a1a1a1] shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill cursor-pointer transition-transform duration-700 ease-out group-hover:scale-104"
        />

        {/* Dark gradient + CTA overlay */}
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="m-5 flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] text-[#EFEFEF]">
            VIEW PROJECT
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>

      {/* Plaque info strip */}
      <div className="mt-4 border-t border-[#a1a1a1] ">
        <h1 className="inline-block font-cinzel-decorative text-xl relative">
          {project.title}
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#9C7C4C] transition-all duration-500 group-hover:w-full" />
        </h1>
        <p className="mt-1 font-cinzel text-md text-[#888787]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 pt-3 font-cinzel text-xs tracking-widest uppercase text-[#888787]">
          {project.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              {i !== 0 && (
                <span className="h-1 w-1 rounded-full bg-[#9C7C4C]" />
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Projects;
