import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Personal from "./components/Personal";

function CvBuilder() {
  const [cv, setCv] = useState({
    personal:null,
    education:[],
    experience:[],
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
        break;
      case 'experience':
        break;
      default:
        throw new Error('How did we get Here');
    }
  }
  return (
    <main>
      <Personal getPersonal={(value)=>handleSubmit('personal',value)}/>
      <h3>Education</h3>
      <InputGroup inputType="text" inputName="jobTitle" inputLabel="Job Title" />
      <InputGroup inputType="number" inputName="jobExp" inputLabel="Job Experience(YOE)" />
      <h3>Experience</h3>
      <InputGroup inputType="text" inputName="eduTitle" inputLabel="Education Title" />
      <InputGroup inputType="number" inputName="eduExp" inputLabel="Education Experience(YOE)" />
    </main>
  );
}

export default CvBuilder;
