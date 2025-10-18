import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const achievement = [
    {
        id: 1,
        title: "ICPC Chennai Regionalist",
        description: "Rank 1 among NSUT teams in intra-college coding contest (ICPC prelims)",
    },

    {
        id: 2,
        title: "All India Rank 67",
        description: "Secured All India Rank 62 in ICPC Regional Contest (2025), competing against top teams from IITs, NITs.",
    },

    {
        id: 3,
        title: "Semi-Finalist in Flipkart GRiD 7.0 (2025)",
        description: "National Semi-Finalist in Flipkart GRiD 7.0 (2025) among top teams across India by clearing coding round held all over India.",
    },

    {
        id: 4,
        title: "1200+ DSA problems",
        description: "Solved 1200+ DSA problems on Codeforces, LeetCode, and CSES",
        
    },
    {
        id: 5,
        title: "Specialist on Codeforces",
        description: "Achieved the 'Specialist' rating on Codeforces by consistently solving algorithmic and competitive programming challenges, demonstrating strong problem-solving and coding skills.",
        
    },
    {
        id: 6,
        title: "top 1.5% (14/1200+) In Graph Contest",
        description: "Ranked top 1.5% (14/1200+) in Graph Contest by AlgoUniversity",
        
    },
    {
        id: 7,
        title: "Semi-finalist Hackathon",
        description: "Semi-finalist at INNOHACKS Hackathon held onsite in NSUT in 24 hrs.",
        
    },
    
]


export const Achievement = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);


    return <section id="achievement" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary">Achievements</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {/* These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces.
                I’ve focused on practical solutions that balance performance, usability, and reliability. */}
            </p>

            <div className="flex flex-col gap-8">
                {achievement.map((achievement, key) => (
                    <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >

                        <div className="p-6">
                            {/* <div className="flex flex-wrap gap-2 mb-3">
                                {achivements.tags.map((tag) => (
                                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                            </div> */}

                            <h3 className="text-xl text-left font-semibold mb-3">{achievement.title}</h3>
                            <p className="text-muted-foreground text-left text-xs mb-4">{achievement.description}</p>

                            {/* <div className="flex justify-between items-center">
                                <a href={achivements.git}
                                    className="text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    <Github />
                                </a>
                            </div> */}

                        </div>

                    </div>
                ))}
            </div>

            {/* <div className="text-center mt-12">
                <a target="_blank" href="https://github.com/HemantGupta04" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div> */}
        </div>
    </section>
}