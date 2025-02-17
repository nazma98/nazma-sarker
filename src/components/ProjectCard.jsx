import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const projectData = [
  {
    name: 'Rock-Paper-Scissors',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
  {
    name: 'Project 2',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
  {
    name: 'Project 3',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
  {
    name: 'Project 4',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
  {
    name: 'Project 5',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
  {
    name: 'Project 6',
    description:
      'A simple interactive hand game often used as a decision-making tool or for fun.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubRepo: 'https://github.com/nazma98/rock-paper-scissor-js',
    liveLink: 'https://rock-paper-scissors-game-ns.netlify.app/',
  },
];

export function ProjectCard() {
  return (
    <div
      className='w-[80%] m-auto md:grid md:grid-cols-2 md:gap-8
            lg:grid-cols-3 lg:gap-6 lg:gap-y-6'
    >
      {projectData.map((project) => {
        return (
          <div
            className='bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 shadow-md
                      rounded-md py-5 px-8 h-72 grid grid-rows-[50px,1fr, 50px] mb-6
                      transition-all duration-300 active:shadow-xl active:scale-110 active:rotate-1 active:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                      lg:hover:shadow-xl lg:hover:scale-105 lg:hover:rotate-1 lg:hover:bg-[linear-gradient(135deg,#00b1b1,#f8551a)]
                      '
            key={project.name}
          >
            <div>
              <h3 className='text-[#f17243f6] text-lg font-semibold active:text-white lg:hover:text-white'>
                {project.name}
              </h3>
            </div>
            <div className='text-sm font-semibold'>{project.description}</div>
            <div className='text-[0.8rem] flex gap-2'>
              {project.tools.map((tool) => {
                return <div>{tool}</div>;
              })}
            </div>
            <div className='flex gap-5 text-xl text-gray-400'>
              <a href={project.githubRepo} target='_blank'>
                <FontAwesomeIcon
                  className='transition-all duration-200 ease-in-out
                                  active:scale-105 active:text-white
                                  lg:hover:scale-110 lg:hover:text-white'
                  icon={faGithub}
                />
              </a>

              <a href={project.liveLink} target='_blank'>
                <FontAwesomeIcon
                  className='transition-all duration-200 ease-in-out
                                  active:scale-105 active:text-white
                                  lg:hover:scale-110 lg:hover:text-white'
                  icon={faLink}
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
