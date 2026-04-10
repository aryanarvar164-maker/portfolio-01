const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[8rem] bg-secondary px-[1rem]" id="footer">
      <div className="max-w-[1200px] mx-auto text-[1.35rem] py-[2rem] px-[1rem] flex flex-wrap items-center justify-between mt-[8rem]">
        <p>&copy; <span>{currentYear}</span> Aryan Narvar</p>
        <div className="flex items-center gap-[5rem] flex-wrap justify-between w-full sm:w-auto mt-4 sm:mt-0">
          <ul className="flex items-center gap-[2rem]">
            <li>
              <a
                href="https://github.com/aryanarvar164-maker"
                rel="noreferrer"
                target="_blank"
                className="tracking-[1px] transition-colors duration-300 relative hover:text-accent hover-effect"
              >
                github
              </a>
            </li>
            {/* <li>
              <a
                href="https://twitter.com/williams_codes"
                rel="noreferrer"
                target="_blank"
                className="tracking-[1px] transition-colors duration-300 relative hover:text-accent hover-effect"
              >
                twitter
              </a>
            </li> */}
          </ul>
          <a href="#top" className="flex items-center justify-center leading-none text-[1.15rem]">
            <p className="flex flex-col gap-[1.2rem] items-end mr-[1rem]">scroll <span>to top</span></p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: 'currentColor' }}
            >
              <title>scroll to top</title>
              <path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
              <path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
