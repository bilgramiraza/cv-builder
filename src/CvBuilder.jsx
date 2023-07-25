import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

function CvBuilder() {
  const [cv, setCv] = useState({
    personal:null,
    education:[{}],
    experience:[{}],
  });

  const cvStatus = cv.personal?.status&&cv.education[0]?.status&&cv.experience[0]?.status; 

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
        throw new Error('How did we get Here');
    }
  };

  return (
    <main>
      <div>
        <Personal getPersonal={(value)=>handleSubmit('personal',value)} personal={cv.personal}/>
        <Education getEducation={(value)=>handleSubmit('education',value)} education={cv.education}/>
        <Experience getExperience={(value)=>handleSubmit('experience',value)} experience={cv.experience}/>
      </div>
      <div>
        {cvStatus && <Preview personal={cv.personal} education={cv.education} experience={cv.experience}/>}
      </div>
    </main>
  );
}

export default CvBuilder;
