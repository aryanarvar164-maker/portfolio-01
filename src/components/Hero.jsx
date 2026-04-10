const Hero = () => {
  return (
    <section className="px-[1rem]">
      <div className="max-w-[1200px] mx-auto mt-[8rem] grid place-items-center gap-[5rem] grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <article className="animate-bounce-in-left flex flex-col justify-center">
          <div>
            <p className="uppercase tracking-[2px] text-[clamp(1.2rem,1vw,1.35rem)] text-accent">hi there 👋🏽, i'm</p>
            <h1 className="text-[clamp(4rem,5vw,6rem)] font-black leading-[1.2]">Aryan Narvar</h1>
          </div>
          <div>
            <p className="text-other text-[1.35rem] pt-[1.3rem] max-w-[500px]">
              Software Developer skilled in problem-solving using Data Structures and Algorithms.
Building fast, efficient, and scalable applications with a focus on performance.
            </p>

            <div className="mt-[5rem] flex md:justify-start justify-center">
              <a href="mailto:aryanarvar164@gmail.com" className="btn hire-btn">
                Hire Me
              </a>
            </div>
          </div>
        </article>
        <img
          src="/assets/coding-ground.png"
          alt="coding desk"
          className="animate-fade-in max-w-[375px] drop-shadow-[0_0_0.75rem_#1c1c1c]"
        />
      </div>
    </section>
  );
};

export default Hero;
