import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I&apos;m a student passionate about artificial intelligence and deep learning,
          exploring how intelligent systems including predictive AI, large language
          models, and generative AI can solve real world challenges.
          <br />
          <br />
          I thrive at the intersection of theory and application, building expertise
          through hands-on projects and community engagement.
          <br />
          <br />
          Driven by curiosity and continuous learning, my goal is to grow into an
          AI engineer contributing to impactful, innovative solutions in research
          and industry.
        </p>
      </div>
    </section>
  );
};

export default About;
