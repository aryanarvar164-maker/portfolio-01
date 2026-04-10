import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mess from "../assets/mess_manager_collage_2x2.png"
import send from "../assets/send_vault_2x2.png"
import blog from "../assets/blog_app_2x2.png"
import bmw from "../assets/bmw.png"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainProjects = [
    {
      id: "01",
      title: "BMW Car_Guy (ON GOING)",
      desc: "Developed a modern frontend web application for car enthusiasts featuring interactive BMW 3D models, smooth animations, and engaging UI/UX to deliver an immersive digital experience.",
      techStack: ["ReactJs","Three.js","React Three Fiber","GSAP", "Tailwind CSS"],
      liveLink: "",
      githubLink: "",
      imgSrc: bmw,
    },
    {
      id: "02",
      title: "E-Mess Management System",
      desc: "Developed a full-stack E-Mess Management System for efficient meal tracking, user management, and order handling, featuring a responsive UI and secure backend.",
      techStack: ["React Js", "express","MongoDB"],
      liveLink: "",
      githubLink: "https://github.com/aryanarvar164-maker/Mess_Management",
      imgSrc: mess,
    },
    {
      id: "03",
      title: "Blog App",
      desc: "Built a full-stack blog platform with user authentication and CRUD operations, enabling users to create and manage posts with images and rich text editor. Designed a responsive UI with secure session handling and efficient content management.",
      techStack: ["React", "Github GraphQL Api", "Styled Component", "Chart Js", "Github Polyghot"],
      liveLink: "https://blog-app-two-sooty.vercel.app/",
      githubLink: "https://github.com/aryanarvar164-maker/BlogApp",
      imgSrc: blog,
    },
    {
      id: "04",
      title: "Send Vault",
      desc: "Built a secure file-sharing web app enabling fast and private file transfers with encrypted data handling and user-friendly interface. Implemented efficient upload, access control, and seamless cross-device sharing.",
      techStack: ["React Js","Tailwind CSS" ,"express","MongoDB"],
      liveLink: "https://send-vault-file-sharing.vercel.app/",
      githubLink: "https://github.com/aryanarvar164-maker/send-vault",
      imgSrc: send,
    },
  ];

  const otherProjects = [
    // {
    //   title: "Rest Countries App",
    //   desc: "Displays all the countries in the world, their population, region and capital. Search for any country and filter based on region with dark mode",
    //   techStack: ["Svelte/SvelteKit", "Tailwind CSS"],
    //   liveLink: "https://rest-countries-with-sveltekit.vercel.app/",
    //   imgSrc: "/assets/rest-countries.png",
    // },
    // {
    //   title: "Joke Web Bot",
    //   desc: "Web bot searches for jokes on the internet by clicking on 'get a joke button' and reads out the joke to you using the 'speechsynthesis api'.",
    //   techStack: ["React js"],
    //   liveLink: "https://williamssam.github.io/wordsearch/",
    //   imgSrc: "/assets/joke-bot.jpg",
    // }
  ];

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="mt-[8rem] py-[4rem] px-[1rem]" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <article className="gsap-fade-up">
          <p className="uppercase tracking-[2px] text-[clamp(1.2rem,1vw,1.35rem)] text-accent">My projects</p>
          <h2 className="text-[clamp(3.2rem,3vw,6rem)] font-black leading-[1.2]">Some Things I Built</h2>
          <p className="text-[1.35rem] text-other max-w-[500px] pt-[1.3rem]">
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications I've have built
          </p>
        </article>

        <section className="pt-[5rem] flex flex-col gap-[12rem]">
          {mainProjects.map((project, index) => {
            const isEven = index % 2 !== 0; // 0-indexed, so 1, 3 are visual 2, 4 (even)
            return (
              <article key={project.id} className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-[5rem]">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-opacity duration-300 relative inline-block h-full hover:opacity-90 ${isEven ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={project.imgSrc}
                    alt={`${project.title} screenshot`}
                    title={project.title}
                  />
                </a>
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <h3 className="text-[clamp(2rem,3vw,4rem)] font-medium tracking-[5px] text-other">{project.id}</h3>
                  <h2 className="pt-[clamp(1.5rem,2vw,3rem)] text-[clamp(2.5rem,3vw,4rem)] font-black leading-[1.2]">{project.title}</h2>
                  <p className="pt-[1.5rem] max-w-[500px]">
                    {project.desc}
                  </p>
                  <ul className="flex flex-wrap items-center gap-[2rem] pt-[2rem]">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="px-[0.5rem] py-[0.2rem] bg-tag border-transparent rounded-[2px] text-primary text-[clamp(1.15rem,1vw,1.3rem)]">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap items-center gap-x-[5rem] pt-[3.2rem]">
                    <li>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-[0.5rem] relative transition-colors duration-300 hover:text-accent hover-effect"
                      >
                        Live Site →
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-[0.5rem] relative transition-colors duration-300 hover:text-accent hover-effect"
                      >
                        Github →
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-[15rem] gsap-fade-up">
          <h3 className="text-center text-[3rem] font-black leading-[1.2]">Other Noteworthy Projects</h3>
          <ul className="pt-[4rem] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[4rem] max-w-[1000px] mx-auto">
            {otherProjects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="h-full flex flex-col justify-between gap-[1rem] bg-secondary rounded-[0.3rem] overflow-hidden text-[1.45rem] shadow-xl transition-all duration-300 hover:bg-transparent hover:shadow-[0px_0px_1px_#9c9c9c] group"
                >
                  <img
                    src={project.imgSrc}
                    alt={`${project.title} screenshot`}
                    className="object-cover h-[300px] w-full"
                  />
                  <div className="p-[2rem] flex flex-col justify-between gap-[1rem]">
                    <h4 className="text-[clamp(1.5rem,2vw,2rem)] font-black leading-[1.2]">{project.title}</h4>
                    <p className="text-[clamp(1.15rem,1vw,1.3rem)]">
                      {project.desc}
                    </p>
                    <ul className="flex items-center gap-[1rem] text-accent text-[clamp(1.15rem,1vw,1.3rem)]">
                      {project.techStack.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Projects;
