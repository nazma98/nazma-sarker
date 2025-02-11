export function Experience() {
  return (
    <section
      id="experience"
      className="m-8 md:m-12 md:p-10 lg:w-[60%] lg:m-auto"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8">
        <h2 className="font-semibold text-2xl text-[#00b1b1] lg:text-3xl">
          Experience
        </h2>
        <div className="bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]"></div>
      </div>
      <div className=" flex flex-col gap-5 w-[80%] m-auto py-5 lg:items-center">
        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
        >
          <h3 className="text-xl font-semibold text-[#00b1b1]">
            Skill Development Secretary
          </h3>
          <p className="text-lg text-white font-medium">
            JU Computer Club, 2020 - 2021
          </p>
          <p className="text-sm mt-2 text-justify">
            <ul className="text-sm mt-2 text-justify list-disc p-2">
              <li>
                Monitored other members of the organization on building their
                skill set
              </li>
            </ul>
          </p>
        </div>

        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
        >
          <h3 className="text-xl font-semibold text-[#00b1b1]">Volunteer</h3>
          <p className="text-lg text-white font-medium">
            Ada Lovelace Celebration, 2020
          </p>
          <p className="text-sm mt-2 text-justify">
            <ul className="text-sm mt-2 text-justify list-disc p-2">
              <li>Worked as Scriber</li>
            </ul>
          </p>
        </div>

        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
        >
          <h3 className="text-xl font-semibold text-[#00b1b1]">Participant</h3>
          <p className="text-lg text-white font-medium">
            Girls' Innovation Bootcamp BdOSN, 2020
          </p>
          <p className="text-sm mt-2 text-justify">
            <ul className="text-sm mt-2 text-justify list-disc p-2">
              <li>Participated in an entrepreneurship contest for startups</li>
              <li>Secured 3rd position</li>
            </ul>
          </p>
        </div>

        <div
          className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
        >
          <h3 className="text-xl font-semibold text-[#00b1b1]">Participant</h3>
          <p className="text-lg text-white font-medium">
            National Girls' Programming Contest, 2019
          </p>
        </div>
      </div>
    </section>
  );
}
