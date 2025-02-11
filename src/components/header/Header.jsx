import { LeftNavSection } from "./LeftNavSection";
import { RightNavSection } from "./RightNavSection";

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
          <LeftNavSection />
          <RightNavSection />
        </nav>
      </header>
    );
  }