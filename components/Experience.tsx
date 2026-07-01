import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EDUCATION
      </h2>

      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/portfolio/isima.png"}
              height={40}
              width={40}
              alt={"Mohamed Amine Kabtni - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Higher Institute of Computer Science Mahdia </span>
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            september 2024 - Present, Mahdia, Tunisia
          </p>

        </div>
        <div className="mt-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Second-year Business Intelligence student with strong interest in AI/ML, combining business computing fundamentals with data-driven technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
