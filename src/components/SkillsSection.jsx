import { useState } from "react"
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const skills = [
    { name: "C++", category: "Programming", logo: "/Images/html-5_5968267.png" },
    { name: "HTML", category: "Programming", logo: "/Images/html-5_5968267.png" },
    { name: "Tailwind CSS",  category: "Programming", logo: "/Images/Tailwind CSS.png" },
    { name: "React",  category: "Programming", logo: "/Images/molecule_10285707.png" },
    { name: "Javascript",  category: "Programming", logo: "/Images/typescript_5968381.png" },
    { name: "Node.js",  category: "Programming", logo: "/Images/programing_15484303.png" },
    { name: "Express.js",  category: "Programming", logo: "/Images/icons8-express-js (1).svg" },
    { name: "MongoDB",  category: "Programming", logo: "/Images/MongoDB.png" },

    { name: "Python",  category: "Machine Learning", logo: "/Images/programing_15484303.png" },
    { name: "TensorFlow",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },
    { name: "Linear Regression",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },
    { name: "LSTM",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },
    { name: "k-Nearest Neighbors (kNN)",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },
    { name: "Decision Trees",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },
    { name: "XGBoost ",  category: "Machine Learning", logo: "/Images/icons8-express-js (1).svg" },


    { name: "Git/Github",  category: "tools", logo: "/Images/Git.png" },
    { name: "VS Code",  category: "tools", logo: "/Images/Visual Studio Code (VS Code).png" },
    { name: "Postman",  category: "tools", logo: "/Images/Postman.png" },
    { name: "Figma",  category: "tools", logo: "/Images/Figma.png" },
    { name: "Pandas",  category: "tools", logo: "/Images/Visual Studio Code (VS Code).png" },
    { name: "NumPy",  category: "tools", logo: "/Images/Postman.png" },
    { name: "Matplotlib",  category: "tools", logo: "/Images/Figma.png" },
    // Pandas, NumPy, Matplotlib, 

]

const categories = ["all", "Programming", "Machine Learning", "tools"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full trasnition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-xs card-hover" >

                        <div className="flex items-center bg-card p-4 sm:bg-none sm:p-0 rounded-full justify-center sm:space-x-6">
                            

                            <div className="hidden sm:flex mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}