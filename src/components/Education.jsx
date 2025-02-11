const bscCourses = [
  'C & C++ Programming',
  'Data Structure',
  'Database Management System',
  'Object Oriented Programming (Java)',
  'Compiler Design (Lex & YACC)',
  'Algorithm Design & Analysis',
  'System Analysis & Design',
  'Software Engineering',
  'Software Testing',
  'Web Engineering',
  'Mobile App Development (Android)',
];

const mscCourses = [
  {
    id: 1,
    course: 'Digital Forensics',
  },
  {
    id: 2,
    course: 'Federated Learning',
  },
  {
    id: 3,
    course: 'Natural Language Processing',
  },
  {
    id: 4,
    course: 'Machine Learning',
  },
  {
    id: 5,
    course: 'Distributed Database',
  },
  {
    id: 6,
    course: 'Medical Imaging',
  },
  {
    id: 7,
    course: 'Computer Vision',
  },
];

export function Education() {
  return (
    <section
      id='education'
      className='m-8 md:m-12 md:p-10 lg:w-[60%] lg:m-auto'
    >
      <div className='flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8'>
        <h2 className='font-semibold text-2xl text-[#00b1b1] lg:text-3xl'>
          Education
        </h2>
        <div className='bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]'></div>
      </div>
      <div className=' flex flex-col gap-5 w-[80%] m-auto py-5 lg:items-center'>
        <div
          className='bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]'
        >
          <h3 className='text-xl font-semibold text-[#00b1b1]'>MSC in CSE</h3>
          <p className='text-lg text-white font-medium'>
            Jahangirnagar University, 2023 - 2024
          </p>
          <p className='text-sm mt-2 text-justify'>
            Specialized in
            <ul className='text-sm mt-2 text-justify list-disc p-2'>
              {mscCourses.map((courseItem) => {
                return <li key={courseItem.id}>{courseItem.course}</li>;
              })}
            </ul>
          </p>
          <p className='text-sm mt-2 text-justify'>
            CGPA of 1st semester 3.85/4.0
          </p>
        </div>

        <div
          className='bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]'
        >
          <h3 className='text-xl font-semibold text-[#00b1b1]'>
            BSC. Hons in CSE
          </h3>
          <p className='text-lg text-white font-medium'>
            Jahangirnagar University, 2018 - 2023
          </p>
          <p className='text-sm mt-2 text-justify'>
            Focused on
            <ul className='text-sm mt-2 text-justify list-disc p-2'>
              {bscCourses.map((course) => {
                return <li key={course}>{course}</li>;
              })}
            </ul>
          </p>
          <p className='text-sm mt-2 text-justify'>CGPA 3.64/4.00</p>
        </div>

        <div
          className='bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]  shadow-cyan-500/30 
                    shadow-lg rounded-md p-5 transition-all duration-300 active:shadow-xl active:scale-110
                    lg:hover:shadow-xl lg:hover:scale-105 lg:w-[75%]'
        >
          <h3 className='text-xl font-semibold text-[#00b1b1]'>
            Higher Secondary Certificate, 2017
          </h3>
          <p className='text-lg text-white font-medium'>
            Holy Cross College, 2015 - 2016
          </p>
          <p className='text-sm mt-2 text-justify'>Science</p>
          <p className='text-sm mt-2 text-justify'>GPA 5.00/5.00</p>
        </div>
      </div>
    </section>
  );
}
