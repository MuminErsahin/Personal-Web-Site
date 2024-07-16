
import { useSelector } from 'react-redux';

function ProjectComp() {
  const projects = useSelector((state) => state.textData.projects);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`dark:bg-[#1A210B] w-full bg-[#CBF281] text-light-green ${darkMode ? "dark" : ""}`} >
      <div className='max-w-[1100px] mx-auto py-8'>
        <h1 className='text-[64px] font-bold mb-8  text-[#4731D3]'>{projects.title}</h1>
        <div className='grid grid-cols-1 gap-8'>
          {projects.items.map((project, index) => (
            <div key={index} className={`dark:bg-[#2B2727] flex flex-col md:flex-row bg-white rounded-md shadow-md ${darkMode ? "dark" : ""} `}>
              <img 
                src={project.image} 
                alt={project.name} 
                className='w-full md:w-1/3 rounded-l-md mb-4 md:mb-0 md:mr-6 object-cover'
                style={{ aspectRatio: '16/9' }} 
              />
              <div className='flex flex-col justify-between p-6'>
                <div>
                  <h2 className={`dark:text-[#C1BAED] text-2xl font-semibold mb-2 text-[#4731D3] ${darkMode ? "dark" : ""}`}>{project.name}</h2>
                  <p className={`dark:text-[#FFFFFF] text-lg mb-4 text-[#383838] ${darkMode ? "dark" : ""} `}>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='px-3 py-1 rounded-full   text-white bg-[#4731D3]'>react</span>
                    <span className='px-3 py-1 rounded-full   text-white bg-[#4731D3]'>redux</span>
                    <span className='px-3 py-1 rounded-full   text-white bg-[#4731D3]'>vercel</span>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <a href="#" className={`dark:text-[#CBF281]  text-[#120B39]  underline leading-4 ${darkMode ? "dark" : ""} `}>{project.links.viewSite}</a>
                  <a href="#" className={`dark:text-[#CBF281]  text-[#120B39]  underline leading-4 ${darkMode ? "dark" : ""} `}>{project.links.details}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
