import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        {/* Project 1 - 3AMAL */}
        <div className="flex justify-center mt-7">
          <Link
            href="https://github.com/akselexe/utopia-career-growth"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/portfolio/3amal.png"
                height={150}
                width={150}
                alt="3AMAL"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">3AMAL</p>
                <p className="text-gray-500 text-[10px]">
                  Built an AI-powered recruitment platform for Africa and the MENA region,
                  enabling CV optimization, AI interviews, and personalized career insights.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Project 2 - BioGaz+ */}
        <div className="flex justify-center mt-7">
          <Link
            href="https://biogaz-connect.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/portfolio/BioGaz+.png"
                height={150}
                width={150}
                alt="BioGaz+"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BioGaz+</p>
                <p className="text-gray-500 text-[10px]">
                  A smart IoT-enabled biodigester that converts organic waste into clean energy and natural fertilizer.
                  Awarded 1st Place at the INJAZ Tunisia Company Program, competing against 20+ teams.
                </p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
