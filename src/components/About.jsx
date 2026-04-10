import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageReveal from './ImageReveal.jsx';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

  return (
    <section ref={containerRef} className="mt-[8rem] bg-secondary py-[8rem] px-[1rem]" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-[8rem] relative gsap-fade-up">
        {/* <img src={aryan} alt="Aryan Narvar"  /> */}
        < ImageReveal className="md:self-end md:justify-self-end w-[425px] "/>
        <article>
          <p className="uppercase tracking-[2px] text-[clamp(1.2rem,1vw,1.35rem)] text-accent">Who is Aryan Narvar?</p>
          <h2 className="text-[clamp(3.2rem,3vw,6rem)] font-black leading-[1.2]">A Bit About Me</h2>
          <div className="pt-[1.25rem]">
            <p className="pt-[2rem] leading-[1.8]">
              I'm passionate about deciphering challenging problems and
              creating exceptional digital experience.
            </p>
            <p className="pt-[2rem] leading-[1.8]">
              As I've grown as a developer, I've contributed to projects and
              worked with other developers to create working applications and
              have written code that are maintainable and easy to understand.
            </p>
            <p className="pt-[2rem] leading-[1.8]">
              Through my studies, I've gained a solid understanding of web
              development concepts, and have dedicated a lot of time to apply
              these concepts to real-world scenarios and applications.
            </p>
            <p className="pt-[2rem] leading-[1.8]">
              When I'm not trying to build, learning, exploring and thinking
              about how to make things better 😉, you can catch me watching
              football matches ⚽.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
