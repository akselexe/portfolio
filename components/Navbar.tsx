"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC<{}> = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolled down more than 50px
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[100px] fixed top-0 z-50 px-10 transition-all duration-500 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-[200%] opacity-0"
        }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
        <div className="flex items-center justify-between w-auto gap-5 md:gap-8 h-auto border border-white bg-transparent px-8 py-3 rounded-full text-white text-sm md:text-base">
          <a href="#" className="cursor-pointer hover:text-gray-300 transition">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-300 transition">
            About
          </a>
          <a href="#experience" className="cursor-pointer hover:text-gray-300 transition">
            Education
          </a>
          <a href="#skills" className="cursor-pointer hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#certifications" className="cursor-pointer hover:text-gray-300 transition">
            Certifications
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-300 transition">
            Projects
          </a>
          <div
            onClick={() => window.open("mailto:amine.kabtani@ieee.org")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
