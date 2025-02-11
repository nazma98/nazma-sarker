export function About() {
    return (
      <div
      id="about"
      className="m-8 md:m-12 md:p-10 lg:w-[60%] lg:m-auto"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8">
        <h2 className="font-semibold text-2xl text-[#00b1b1] lg:text-3xl">
          About
        </h2>
        <div className="bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]"></div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-[80%] m-auto gap-5 
                md:text-xl md:p-8
                lg:flex-row lg:gap-3"
      >
        <div className="text-justify">
          Hey there! My name is Nazma Sarker. I’m a tech enthusiast and
          passionate problem solver with a strong foundation in software
          development and backend engineering. I love exploring open-source,
          innovative solutions and optimizing performance. <br />
          Open for hire and excited to collaborate on impactful projects!
        </div>
        <div>
          <img
            className="w-[50%] h-[50%] object-cover rounded-full 
                        ring-2 ring-[#00b1b1] bg-[#0a192f] m-auto
                        lg:w-[80%]"
            src="assets/images/blank-pp.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    );
  }