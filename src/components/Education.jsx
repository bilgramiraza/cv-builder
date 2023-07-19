import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Education({getEducation}) {
  const [jobTitle, setJobTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [index, setIndex] = useState(0);
  
  const handleChange = (e) =>{
    switch(e.target.name){
      case 'jobTitle':
        setJobTitle(e.target.value);
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
      jobTitle,
      desc,
    };
    getEducation(data);
  };

  return (
    <div>
      <h3>Education Details</h3>
      <form onSubmit={handleSubmit}>
        <EntriesManager index={index} setIndex={setIndex} maxLength={9}/>
        <InputGroup inputType="text" inputName="jobTitle" inputLabel="Job Title" inputValue={jobTitle} handleChange={handleChange}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Education;


Education.propTypes = {
  getEducation: PropTypes.func.isRequired,
};
