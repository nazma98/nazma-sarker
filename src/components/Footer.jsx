import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export function Footer() {
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
                icon={faSquareXTwitter}
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