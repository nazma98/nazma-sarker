import { Header } from './components/header';
import { Introduction } from './components/Introduction';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import './App.css';

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
