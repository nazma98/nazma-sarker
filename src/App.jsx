import { Header} from "./components/header";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./App.css";








function Experience() {
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
              Monitored other members of the organization on building
              their skill set
            </li>
          </ul>
        </p>
      </div>

      <div
        className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30
                  shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                  lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
      >
        <h3 className="text-xl font-semibold text-[#00b1b1]">
          Volunteer
        </h3>
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
        <h3 className="text-xl font-semibold text-[#00b1b1]">
          Participant
        </h3>
        <p className="text-lg text-white font-medium">
          Girls' Innovation Bootcamp BdOSN, 2020
        </p>
        <p className="text-sm mt-2 text-justify">
          <ul className="text-sm mt-2 text-justify list-disc p-2">
            <li>
              Participated in an entrepreneurship contest for startups
            </li>
            <li>Secured 3rd position</li>
          </ul>
        </p>
      </div>

      <div
        className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                  shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                  lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]"
      >
        <h3 className="text-xl font-semibold text-[#00b1b1]">
          Participant
        </h3>
        <p className="text-lg text-white font-medium">
          National Girls' Programming Contest, 2019
        </p>
      </div>
    </div>
  </section>
  );
}

function Projects() {
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

function Contact() {
  return (
    <section
    id="contact"
    className="m-8 mb-0 md:m-12 md:p-10 md:pb-4 md:mb-0 lg:w-[60%] lg:m-auto"
  >
    <div className="flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8">
      <h2 className="font-semibold text-2xl text-[#00b1b1] lg:text-3xl">
        Contact
      </h2>
      <div className="bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]"></div>
    </div>
    <div className="w-[80%] m-auto mb-6 text-center md:text-xl md:p-8">
      Looking to collaborate or need expertise on your next project?{" "}
      <br /> I’m open for hire!
    </div>
    <div>
      <form
        action="https://formspree.io/f/xanyjbqo"
        method="post"
        className="flex flex-col gap-2 w-[85%] m-auto md:w-[70%] lg:items-center"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-8 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-8"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-8 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-8"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message:</label>
            <textarea
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-25 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-30"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-center lg:items-center">
            <button
              className="bg-[#0a192f] bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]
                              rounded-md w-[50%] p-2 mt-3 font-semibold md:w-[40%] lg:w-[100%] lg:p-3
                              transition-all duration-300 ease-in-out 
                              active:scale-95 active:bg-[linear-gradient(135deg,#008a8a69,rgba(200,80,40,0.7))]
                              lg:hover:bg-[linear-gradient(135deg,#00d4d469,rgba(255,100,50,0.6))] lg:hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="flex justify-center">
      <a
        href="#"
        className="text-white px-4 py-2 mt-5 
                  bg-[#0a192f] font-semibold ring-2 ring-[#00b1b169] 
                  rounded-md mb-3 md:m-5 lg:mt-10"
      >
        Back to Top
      </a>
    </div>
  </section>
  );
}

function Footer() {
  return(
    <footer
    className="bg-[#0a192f] bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]
        p-6 text-white text-sm text-center"
  >
    <div className="flex flex-col gap-3">
      <div className="flex justify-between w-[50%] text-lg m-auto md:w-[30%] lg:w-[18%] text-[#858585]">
        <div>
          <a href="" target="_blank">
            <i className="fa-brands fa-facebook "></i>
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-[#3c5a9a] 
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-[#3c5a9a] 
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-[#3c5a9a]
                            transition-all duration-300 ease-in-out"
              icon={faFacebook}
            />
          </a>
        </div>

        <div>
          <a href="mailto:nazma.sarker1398@gmail.com">
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-[#db4539] 
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-[#db4539] 
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-[#db4539]
                            transition-all duration-300 ease-in-out"
              icon={faEnvelope}
            />
          </a>
        </div>

        <div>
          <a href="" target="_blank">
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-black
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-black
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-black
                            transition-all duration-300 ease-in-out"
              icon={faTwitter}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nazma-sarker-586724199"
            target="_blank"
          >
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-[#1469c7]
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-[#1469c7]
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-[#1469c7]
                            transition-all duration-300 ease-in-out"
              icon={faLinkedin}
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/nazma98" target="_blank">
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-[#22262a]
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-[#22262a]
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-[#22262a]
                            transition-all duration-300 ease-in-out"
              icon={faGithub}
            />
          </a>
        </div>
        <div>
          <a href="https://discord.com/users/nazma9029" target="_blank">
            <FontAwesomeIcon
              className="rounded-full 
                            active:bg-[#aaaaaa] active:[text-shadow:0_0_10px_#ffffff] active:text-xl active:text-[#566af6]
                            md:text-2xl md:active:bg-[#aaaaaa] md:active:[text-shadow:0_0_10px_#ffffff] md:active:text-[#566af6]
                            lg:hover:bg-[#aaaaaa] lg:hover:[box-shadow:0_0_10px_#ffffff] lg:hover:text-[#566af6]
                            transition-all duration-300 ease-in-out"
              icon={faDiscord}
            />
          </a>
        </div>
      </div>
      <div
        className="flex flex-col gap-2 
                md:flex-row md:justify-center"
      >
        <div>
          Made with <span>&hearts;</span> by Nazma <span>&copy;</span>{" "}
          Copyright 2025.
        </div>
        <div>All rights reserved.</div>
      </div>
    </div>
  </footer>
  );
}

function Introduction() {
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

function App() {
  return (
    <div className="bg-[#0a192f] text-white">
      <Header />
        <Introduction />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      <Footer />

    </div>
  );
}

export default App;
