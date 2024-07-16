import { useSelector } from 'react-redux';

function Skills() {
  const skills = useSelector((state) => state.textData.skills);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`dark:bg-[#252128] flex p-14 justify-around content-center ${darkMode ? "dark" : ""}`}>
      <div className='dark:text-[#cbf281] text-3xl font-bold ml-[170px] text-[#4832D3] text-[48px] '>
        <h1>{skills.title}</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-60 gap-y-4'>
        {skills.items.map((skill, index) => (
          <div className='flex items-center' key={index}>
            <img className='max-w-32 min-h-32 rounded-md m-2' src={skill.icon} alt={`${skill.name} icon`} />
            <p className='text-2xl mx-5'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
