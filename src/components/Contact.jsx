import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
    <section id="contact" ref={containerRef} className="mt-[8rem] py-[4rem] px-[1rem] gsap-fade-up">
      <div className="max-w-[1200px] mx-auto">
        <p className="uppercase tracking-[2px] text-[clamp(1.2rem,1vw,1.35rem)] text-accent">Have a project? or just looking to hire?</p>
        <h2 className="text-[clamp(3.2rem,3vw,6rem)] font-black leading-[1.2]">Let's Work Together</h2>
        <p className="text-[1.35rem] text-other pt-[1.3rem] max-w-[500px]">
          Feel free to reach out if you're looking to hire, just want to
          connect or see if we can build something amazing together.
        </p>

        <div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanarvar164@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="flex mt-[8rem] w-max uppercase tracking-[1px] transition-colors duration-300 relative hover:text-accent hover-effect"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
