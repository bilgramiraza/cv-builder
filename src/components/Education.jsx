import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Education({getEducation, education}) {
  const [index, setIndex] = useState(0);

  const [eduTitle, setEduTitle] = useState(education[index]?.eduTitle||'');
  const [desc, setDesc] = useState(education[index]?.desc||'');
  
  const handleChange = (e) =>{
    switch(e.target.name){
      case 'eduTitle':
        setEduTitle(e.target.value);
        break;
      case 'desc':
        setDesc(e.target.value);
        break;
      default:
        throw new Error('How did we get Here');
    }
  };

  const handleSubmit= (e) =>{
    e.preventDefault();
    const data = {
      eduTitle,
      desc,
    };
    if(Object.keys(education[0]).length){
      let newEducation = education.slice(0,-1);
      getEducation([...newEducation,data,{}]);
    }else{
      getEducation([data,{}]);
    }
    setIndex(education.length);
    setDesc('');
    setEduTitle('');
  };

  return (
    <div>
      <h3>Education Details</h3>
      <EntriesManager index={index} setIndex={setIndex} maxLength={education.length}/>
      <form onSubmit={handleSubmit} key={index}>
        <InputGroup inputType="text" inputName="eduTitle" inputLabel="Education Title" inputValue={eduTitle} handleChange={handleChange}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Education;


Education.propTypes = {
  getEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
};
