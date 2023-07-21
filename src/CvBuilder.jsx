import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

function CvBuilder() {
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
        throw new Error('How did we get Here');
    }
  };

  return (
    <main>
      <Personal getPersonal={(value)=>handleSubmit('personal',value)}/>
      <Education getEducation={(value)=>handleSubmit('education',value)} education={cv.education}/>
      <Experience getExperience={(value)=>handleSubmit('experience',value)} experience={cv.experience}/>
    </main>
  );
}

export default CvBuilder;
