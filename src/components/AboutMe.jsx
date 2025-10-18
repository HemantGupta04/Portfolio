import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Software Engineer </h3>

                    <p className="text-muted-foreground md:text-left">
                        🎓 Currently in my 4th year of B.Tech (Mathematics and Computing) at Netaji Subhas University of Technology, New Delhi.

                        
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        Driven by curiosity and persistence, I enjoy solving challenging problems, whether it’s 
                        optimizing algorithms in C++ or crafting seamless front-end experiences in React. My goal 
                        is to create solutions that not only work flawlessly but also feel effortless to use.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="/Resume/Final_resume.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>

                <div className='bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center'>
                    <img className='h-100 overflow-hidden object-cover' src="/Images/photo.png" alt="" />
                </div>
            </div>
        </div>
    </section>
}