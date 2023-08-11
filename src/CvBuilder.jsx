import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import PropTypes from 'prop-types';

function CvBuilder({darkMode}) {
  const [cv, setCv] = useState({
    personal:null,
    education:[{}],
    experience:[{}],
  });

  const handleSubmit = (category, value) =>{
    switch(category){
      case 'personal':
        setCv({
          ...cv,
          personal:value,
        });
        break;
      case 'education':
        setCv({
          ...cv,
          education:value,
        });
        break;
      case 'experience':
        setCv({
          ...cv,
          experience:value,
        });
        break;
      default:
        throw new Error('Invalid Category passed to SubmitHandler');
    }
  };

  return (
    <main className={`${darkMode ? 'dark' : ''} flex flex-col lg:flex-row lg:min-h-[87vh]`}>
      <div className="block w-full lg:w-2/5 px-2 bg-gray-400 dark:bg-gray-900 overflow-auto">
        <Personal getPersonal={(value)=>handleSubmit('personal',value)} personal={cv.personal}/>
        <Education getEducation={(value)=>handleSubmit('education',value)} education={cv.education}/>
        <Experience getExperience={(value)=>handleSubmit('experience',value)} experience={cv.experience}/>
      </div>
      <div className="block border-l-2 border-black w-full lg:w-3/5 px-2 bg-gray-400 dark:border-white dark:bg-gray-900">
        <Preview personal={cv.personal} education={cv.education} experience={cv.experience}/>
      </div>
    </main>
  );
}

export default CvBuilder;

CvBuilder.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
