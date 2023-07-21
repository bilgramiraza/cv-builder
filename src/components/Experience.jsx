import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Experience({getExperience, experience}) {
  const [index, setIndex] = useState(0);

  const [expTitle, setExpTitle] = useState(experience[index]?.expTitle||'');
  const [desc, setDesc] = useState(experience[index]?.desc||'');
  
  const handleChange=(e)=>{
    switch(e.target.name){
      case 'expTitle':
        setExpTitle(e.target.value);
        break;
      case 'desc':
        setDesc(e.target.value);
        break;
      default:
        throw new Error('Invalid Input Name');
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {
      expTitle,
      desc,
    };
    if(Object.keys(experience[0]).length){
      let newExperience = experience.slice(0,-1);
      getExperience([...newExperience,data,{}]);
    }else{
      getExperience([data,{}]);
    }
    setIndex(experience.length);
    setDesc('');
    setExpTitle('');
  };

  const handleIndexChange=(i)=>{
    setIndex(i);
    setExpTitle(experience[i]?.expTitle||'');
    setDesc(experience[i]?.desc||'');
  };

  return (
    <div>
      <h3>Experience Details</h3>
      <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={experience.length}/>
      <form onSubmit={handleSubmit} key={index}>
        <InputGroup inputType="text" inputName="expTitle" inputLabel="Experience Title" inputValue={expTitle} handleChange={handleChange}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Experience;


Experience.propTypes = {
  getExperience: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired,
};
