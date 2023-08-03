import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Experience({getExperience, experience}) {
  const [index, setIndex] = useState(0);

  const [expCompany, setExpCompany] = useState(experience[index]?.expCompany||'');
  const [expTitle, setExpTitle] = useState(experience[index]?.expTitle||'');
  const [startDate, setStartDate] = useState(experience[index]?.startDate||'');
  const [endDate, setEndDate] = useState(experience[index]?.endDate||'');
  const [desc, setDesc] = useState(experience[index]?.desc||'');
  const [status, setStatus] = useState(experience[index]?.status||false);

  const formStatus = expCompany&&expTitle&&startDate&&endDate&&desc;
  const disableNewEntry = experience.every(exp=>exp.status);
  
  const handleChange=(e)=>{
    switch(e.target.name){
      case 'expCompany':
        setExpCompany(e.target.value);
        break;
      case 'expTitle':
        setExpTitle(e.target.value);
        break;
      case 'startDate':
        setStartDate(e.target.value);
        break;
      case 'endDate':
        setEndDate(e.target.value);
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
    const newExperience = experience.map((exp, i)=> i===index?{expCompany,expTitle,startDate,endDate,desc,status:true}:exp);
    getExperience(newExperience);
    setStatus(true);
    return;
  };

  const handleIndexChange=(i)=>{
    setIndex(i);
    setExpCompany(experience[i]?.expCompany||'');
    setExpTitle(experience[i]?.expTitle||'');
    setStartDate(experience[i]?.startDate||'');
    setEndDate(experience[i]?.endDate||'');
    setDesc(experience[i]?.desc||'');
    setStatus(experience[i]?.status||false);
  };

  const addEntry = () =>{
    setIndex(index+1);
    const newExperience = [...experience];
    newExperience.splice(index+1,0,{});
    getExperience(newExperience);
    setExpCompany('');
    setExpTitle('');
    setStartDate('');
    setEndDate('');
    setDesc('');
    setStatus(false);
  };

  const removeEntry = () =>{
    let newExperience ;
    if(experience.length===1){
      newExperience= [{}];
    }else{
      newExperience= [...experience];
      newExperience.splice(index,1);
    }
    getExperience(newExperience);
    setExpCompany(newExperience[index]?.expCompany||'');
    setExpTitle(newExperience[index]?.expTitle||'');
    setStartDate(newExperience[index]?.startDate||'');
    setEndDate(newExperience[index]?.endDate||'');
    setDesc(newExperience[index]?.desc||'');
    setStatus(newExperience[index]?.status||false);
  };


  return (
    <div>
      <h3>Experience Details</h3>
      <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={experience.length}/>
      <form onSubmit={handleSubmit} key={index}>
        <InputGroup inputType="text" inputName="expCompany" inputLabel="Company Name" inputValue={expCompany} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="text" inputName="expTitle" inputLabel="Job Title" inputValue={expTitle} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="month" inputName="startDate" inputLabel="Start Date" inputValue={startDate} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="month" inputName="endDate" inputLabel="End Date" inputValue={endDate} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Job Description" inputValue={desc} handleChange={handleChange} disabled={status}/>
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
