import React from "react";

const certifications = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Feb 2026",
    id: "1tO0Ys3ITkGJkXM3sgBKrQ",
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    date: "Jan 2026",
    id: "6YSchyAvQGWRCf1CJoKOlw",
  },
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Jan 2026",
    id: "M0S7oiZMQcO9R966P9O6-Q",
  },
  {
    title: "Introduction to Transformer-Based NLP",
    issuer: "NVIDIA",
    date: "Jan 2026",
    id: "He2KfYSaRj28w6FgPx1-aA",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        CERTIFICATIONS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-16 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        ACHIEVEMENTS
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-5 lg:px-20 max-w-[1200px]">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] max-w-[500px] relative group"
          >
            <div className="relative bg-transparent rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between border-[0.1px] border-white transition-all duration-300 overflow-hidden">

              <div className="relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="text-gray-400 transition-colors duration-300 space-y-2">
                  <p className="font-semibold text-lg text-green-500">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                  <p className="text-xs font-mono bg-black/20 p-2 rounded-md inline-block mt-4 border border-gray-700 transition-colors">
                    ID: {cert.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
