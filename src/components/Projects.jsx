export function Projects() {
    return (
      <section
      id="projects"
      className="m-8 md:m-12 md:p-10 lg:w-[60%] lg:m-auto"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8">
        <h2 className="font-semibold text-2xl text-[#00b1b1] lg:text-3xl">
          Projects
        </h2>
        <div className="bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]"></div>
      </div>
      <div className="w-[80%] m-auto mb-6 text-center md:text-xl md:p-8">
        Here are some projects I have worked on previously!
      </div>
  
      <div
        className="w-[80%] m-auto md:grid md:grid-cols-2 md:gap-8
                lg:grid-cols-3 lg:gap-6 lg:gap-y-6"
      >
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    "
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Rock-Paper-Scissors
            </h3>
          </div>
          <div className="text-sm font-semibold">
            A simple interactive hand game often used as a decision-making
            tool or for fun.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a
              href="https://github.com/nazma98/rock-paper-scissor-js"
              target="_blank"
            >
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a
              href="https://rock-paper-scissors-game-ns.netlify.app/"
              target="_blank"
            >
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
  
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md 
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]"
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Project 2
            </h3>
          </div>
          <div className="text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quos.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="" target="_blank">
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a href="" target="_blank">
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
  
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]"
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Project 3
            </h3>
          </div>
          <div className="text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quos.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="" target="_blank">
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a href="" target="_blank">
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
  
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]"
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Project 4
            </h3>
          </div>
          <div className="text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quos.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="" target="_blank">
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a href="" target="_blank">
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
  
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]"
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Project 5
            </h3>
          </div>
          <div className="text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quos.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="" target="_blank">
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a href="" target="_blank">
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
  
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                    rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                    transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                    lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]"
        >
          <div>
            <h3 className="text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white">
              Project 6
            </h3>
          </div>
          <div className="text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            quos.
          </div>
          <div className="text-[0.8rem] flex gap-2">
            <div>Html</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            <a href="" target="_blank">
              <i
                className="fa-brands fa-github transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-110 lg:hover:text-white"
              ></i>
            </a>
  
            <a href="" target="_blank">
              <i
                className="fa-solid fa-link transition-all duration-200 ease-in-out
                                active:scale-105 active:text-white
                                lg:hover:scale-105 lg:hover:text-white"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
  }