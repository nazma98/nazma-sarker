import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id='projects' className='m-8 md:m-12 md:p-10 lg:w-[60%] lg:m-auto'>
      <div className='flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8'>
        <h2 className='font-semibold text-2xl text-[#00b1b1] lg:text-3xl'>
          Projects
        </h2>
        <div className='bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]'></div>
      </div>
      <div className='w-[80%] m-auto mb-6 text-center md:text-xl md:p-8'>
        Here are some projects I have worked on previously!
      </div>
      <ProjectCard />
    </section>
  );
}
