import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Experience({getExperience, experience}) {
  const [index, setIndex] = useState(0);

  const [expTitle, setExpTitle] = useState(experience[index]?.expTitle||'');
  const [desc, setDesc] = useState(experience[index]?.desc||'');
  const [status, setStatus] = useState(experience[index]?.status||false);

  const formStatus = expTitle&&desc;
  const disableNewEntry = experience.every(exp=>exp.status);
  
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
    if(experience[index].status){
      const newExperience = experience.map((exp, i)=>i===index?{...exp,status:false}:exp);
      getExperience(newExperience);
      setStatus(false);
      return;
    }
    const newExperience = experience.map((exp, i)=> i===index?{expTitle,desc,status:true}:exp);
    getExperience(newExperience);
    setStatus(true);
    return;
  };

  const handleIndexChange=(i)=>{
    setIndex(i);
    setExpTitle(experience[i]?.expTitle||'');
    setDesc(experience[i]?.desc||'');
    setStatus(experience[i]?.status||'');
  };

  const addEntry = () =>{
    setIndex(index+1);
    const newExperience = [...experience];
    newExperience.splice(index+1,0,{});
    getExperience(newExperience);
    setDesc('');
    setExpTitle('');
    setStatus(false);
  };

  const removeEntry = () =>{
    const newExperience = [...experience];
    newExperience.splice(index,1);
    getExperience(newExperience);
    setDesc(newExperience[index]?.desc||'');
    setExpTitle(newExperience[index]?.expTitle||'');
    setStatus(newExperience[index]?.status||false);
  };


  return (
    <div>
      <h3>Experience Details</h3>
      <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={experience.length}/>
      <form onSubmit={handleSubmit} key={index}>
        <InputGroup inputType="text" inputName="expTitle" inputLabel="Experience Title" inputValue={expTitle} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange} disabled={status}/>
        <button disabled={!formStatus}>{status?'Edit':'Submit'}</button>
        <button type="button" onClick={addEntry} disabled={!disableNewEntry}>Add</button>
        <button type="button" onClick={removeEntry} disabled={!experience[index]?.status}>Remove</button>
      </form>
    </div>
  );
}

export default Experience;


Experience.propTypes = {
  getExperience: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired,
};
