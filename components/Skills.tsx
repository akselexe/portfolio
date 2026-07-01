import React from "react";
import Image from "next/image";

const skillCategories = [
    {
        title: "Web Development (MERN Stack)",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        skills: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
        title: "Business Intelligence",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        skills: ["Power BI", "SQL", "Data Warehousing", "ETL Pipelines", "Data Analysis", "Data Analytics", "Reporting"],
    },
    {
        title: "Machine Learning & AI",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        skills: ["Python", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "RAG", "Deep Learning", "NLP", "Generative AI", "Diffusion Models"],
    },
    {
        title: "Programming",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        skills: ["Python", "Java", "SQL", "C", "OOP"],
    },

];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20">
            <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
                SKILLS
            </h2>
            <p className="tracking-[0.5em] text-center text-transparent font-light pb-16 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
                TECH STACK & TOOLS
            </p>

            <div className="flex flex-wrap justify-center gap-10 px-5 lg:px-20 max-w-[1200px]">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="flex-1 min-w-[300px] max-w-[500px] relative group"
                    >

                        <div className="relative bg-transparent rounded-3xl p-8 md:p-12 h-full flex flex-col items-center border-[0.1px] border-white hover:bg-white hover:text-black transition-all duration-300 group">

                            {/* Category Icon */}
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                <Image
                                    src={category.icon}
                                    alt={category.title}
                                    width={60}
                                    height={60}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                    unoptimized
                                />
                            </div>

                            {/* Category Title - Inverted on hover */}
                            <h3 className="text-white group-hover:text-black text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight transition-colors duration-300">
                                {category.title}
                            </h3>

                            {/* Skills Grid */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className="px-5 py-2.5 rounded-full text-sm font-medium bg-transparent text-gray-400 border border-gray-400 group-hover:text-black group-hover:border-black transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
