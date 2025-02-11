export function Header() {
    return (
      <header
        className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] 
          px-3 shadow-cyan-500/30 shadow-md"
      >
        <nav
          className="flex flex-col items-center justify-between
              text-white font-bold py-5 px-3 md:flex-row lg:flex-row lg:justify-around"
        >
          <a
            className="text-3xl py-3 transition-all duration-300 active:[text-shadow:0_0_15px_#00b1b1]
                  active:text-[#00b1b1] md:active:text-[#66ffff]
                  lg:hover:text-[#66ffff] lg:hover:[text-shadow:0_0_15px_#00b1b1] lg:text-4xl"
            href="#"
          >
            Nazma Sarker
          </a>
          <ul className="flex items-center justify-between gap-3 text-sm md:gap-4 md:text-lg lg:text-xl lg:gap-7">
            <li className="duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]">
              <a href="#about">About</a>
            </li>
            <li className="duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]">
              <a href="#education">Education</a>
            </li>
            <li className="duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]">
              <a href="#skills">Skills</a>
            </li>
            <li className="duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]">
              <a href="#experience">Experience</a>
            </li>
            <li className="duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }