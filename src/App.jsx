import { Header } from "./components/header";
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
