import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.gsap-fade-up', {
      scrollTrigger: {
        trigger: '.gsap-fade-up',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  const skillsList = [
    "HTML & CSS",
    "Tailwind CSS",
    "Javascript (ES6+)",
    "React Js",
    "Styled Component",
    "Next Js",
    "Git",
    "GSAP",
    "Express",
    "MongoDB"
  ];

  return (
    <section ref={containerRef} className="mt-[8rem] py-[4rem] px-[1rem] gsap-fade-up" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <article>
          <p className="uppercase tracking-[2px] text-[clamp(1.2rem,1vw,1.35rem)] text-accent">My Skills</p>
          <h2 className="text-[clamp(3.2rem,3vw,6rem)] font-black leading-[1.2]">Technologies I Work With</h2>

          <p className="text-[1.35rem] text-other max-w-[500px] pt-[1.3rem]">
            I've have taken a number of online courses, currently getting my
            hands dirty with
            <strong className="text-main"> ReactJs and GSAP </strong> and here are a few
            technologies I’ve been working with recently:
          </p>
        </article>
        
        <ul className="pt-[5rem] grid grid-cols-2 sm:grid-cols-4 gap-y-[3.2rem] gap-x-[1rem]">
          {skillsList.map((skill, index) => (
            <li key={index} className="flex items-center text-[1.4rem]">
              <span className="w-[8px] h-[8px] mr-[10px] bg-accent inline-block rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
