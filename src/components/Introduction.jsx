export function Introduction() {
    return (
      <div
      id="# top"
      className="h-lvh flex flex-col items-center px-7 py-[50%] gap-4 md:h-lvh lg:py-[15%]"
    >
      <h4>Hi, I am</h4>
      <h1 className="text-4xl font-bold text-[#00b1b1] lg:text-7xl">
        Nazma Sarker
      </h1>
      <h1 className="font-semibold text-center md:text-2xl">
        A creative professional with a passion for building engaging &
        effective web applications.
      </h1>
      <div className="flex gap-2">
        <a href="#">
          <p
            className="ring ring-[#00b1b1] p-3 rounded-lg m-2 text-sm
                        active:bg-[#00b1b1] active:text-[#0a192f] active:ring-white active:font-semibold transition-all duration-300 ease-in-out active:scale-110
                        md:text-[18px]
                        lg:text-lg lg:hover:bg-[#00b1b1] lg:hover:text-[#0a192f] lg:hover:ring-white lg:hover:font-semibold lg:hover:scale-105"
          >
            Get Resume
          </p>
        </a>
        <a href="#contact">
          <p
            className="ring ring-[#00b1b1] p-3 rounded-lg m-2 text-sm
                        active:bg-[#00b1b1] active:text-[#0a192f] active:ring-white active:font-semibold transition-all duration-300 ease-in-out active:scale-110
                        md:text-[18px]
                        lg:text-lg lg:hover:bg-[#00b1b1] lg:hover:text-[#0a192f] lg:hover:ring-white lg:hover:font-semibold lg:hover:scale-105"
          >
            Say Hello
          </p>
        </a>
      </div>
    </div>
    );
  }