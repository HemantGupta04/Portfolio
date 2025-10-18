import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: "AlgoAce - Online Judge",
        description: "A MERN-based online coding platform featuring secure authentication, real-time code execution, and admin tools for managing problems and submissions.",
        image: "/Projects/home.png",
        tags: ["Node.js", "Javascript", "Tailwind CSS", "React", "Express.js", "MongoDB", "Docker"],
        git: "https://github.com/HemantGupta04/Project-OnlineJudge"
    },

    {
        id: 2,
        title: "E-commerce Web App",
        description: "A full-stack MERN e-commerce platform that enables product management with CRUD operations, secure authentication, and real-time inventory updates.",
        image: "/Images/ecomm.png",
        tags: ["Node.js", "MongoDB", "Express.js", "PostMan", "Tailwind CSS", "React", "twillo"],
        git: "https://github.com/HemantGupta04/EcommerceSite"
    },

    {
        id: 3,
        title: "Shape -IT",
        description: "A responsive mental health web, featuring personalized wellness sections and interactive meditation rooms.",
        image: "/Projects/shapeit.png",
        tags: ["Javascript", "CSS", "HTML"],
        git: "https://github.com/HemantGupta04/ShapeIt"
    },

    {
        id: 4,
        title: "Stock Headlines Analysis",
        description: "A machine learning model that predicts stock movements (up or down) based on real-time news headlines using sentiment analysis.",
        image: "/Projects/download.jpeg",
        tags: ["Python", "TinyMl", "LSTM"],
        git: "#"
    },
]


export const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);


    return <section id="projects" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces.
                I’ve focused on practical solutions that balance performance, usability, and reliability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}
                                className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground text-left text-xs mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <a href={project.git}
                                    className="text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    <Github />
                                </a>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a target="_blank" href="https://github.com/HemantGupta04" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}