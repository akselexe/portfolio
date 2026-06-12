"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);
  const toRotate = ["Mohamed Amine Kabtni!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <div className="flex flex-col w-full mt-[100px] z-[20]">
      {/* Top Row: Image left-aligned, Name to the right */}
      <div className="flex flex-row items-center justify-start px-10 gap-10 mb-16 min-h-[250px]">
        {/* Profile Image - Static - Left aligned with navbar */}
        <div className="flex-shrink-0">
          <Image
            priority
            src="/portfolio/me1.png"
            height={250}
            width={250}
            alt="Mohamed Amine Kabtni"
            className="rounded-full object-cover shadow-2xl border-4 border-white bg-transparent"
          />
        </div>

        {/* Name - With typewriter animation for the name part */}
        <div className="flex items-center min-h-[250px]">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            <span className="text-gray-400">
              Hello, My name is <br />
              <span className="text-5xl md:text-6xl text-white">
                {text}
                <span className="animate-pulse text-white">|</span>
              </span>
            </span>
          </h1>
        </div>
      </div>

      {/* Content Below: Code & Chill, Bio, Contact - CENTERED */}
      <div className="flex flex-col items-center justify-center text-center w-full">

        {/* Code & Chill */}
        <div className="flex items-center justify-center mb-5">
          <p className="text-2xl font-medium tracking-tighter text-gray-300">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image
            src="/portfolio/popcorn.gif"
            height={40}
            width={40}
            alt="Popcorn"
            className="ml-2"
          />
        </div>

        {/* Bio */}
        <p className="text-lg text-gray-200 mb-8 max-w-[800px]">
          When you dive deep into the data, there&#39;s a lot of magic and insight waiting to be found.
          <br />
          <br />
        </p>

        {/* Contact Button */}
        <button
          onClick={() => window.open("mailto:amine.kabtani@ieee.org")}
          className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent transition-all duration-300"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
