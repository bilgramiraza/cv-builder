import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Education({getEducation, education}) {
  const [index, setIndex] = useState(0);

  const [eduTitle, setEduTitle] = useState(education[index]?.eduTitle||'');
  const [desc, setDesc] = useState(education[index]?.desc||'');
  const [endDate, setEndDate] = useState(education[index]?.endDate||'');
  const [address, setAddress] = useState(education[index]?.address||'');
  const [status, setStatus] = useState(education[index]?.status||false);

  const formStatus = eduTitle&&desc;
  const disableNewEntry = education.every(edu=>edu.status);
  
  const handleChange=(e)=>{
    switch(e.target.name){
      case 'eduTitle':
        setEduTitle(e.target.value);
        break;
      case 'desc':
        setDesc(e.target.value);
        break;
      case 'endDate':
        setEndDate(e.target.value);
        break;
      case 'address':
        setAddress(e.target.value);
        break;
      default:
        throw new Error('Invalid Input Name');
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(education[index].status){
      const newEducation = education.map((edu, i)=> i===index?{...edu,status:false}:edu);
      getEducation(newEducation);
      setStatus(false);
      return;
    }
    const newEducation = education.map((edu, i)=> i===index?{eduTitle,desc,endDate,address,status:true}:edu);
    getEducation(newEducation);
    setStatus(true);
    return;
  };

  const handleIndexChange=(i)=>{
    setIndex(i);
    setEduTitle(education[i].eduTitle||'');
    setDesc(education[i].desc||'');
    setEndDate(education[index].endDate||'');
    setAddress(education[index].address||'');
    setStatus(education[i].status||false);
  };

  const addEntry = () =>{
    setIndex(index+1);
    const newEducation = [...education];
    newEducation.splice(index+1,0,{});
    getEducation(newEducation);
    setEduTitle('');
    setDesc('');
    setEndDate('');
    setAddress('');
    setStatus(false);
  };

  const removeEntry = () =>{
    const newEducation = [...education];
    newEducation.splice(index,1);
    getEducation(newEducation);
    setEduTitle(newEducation[index]?.eduTitle||'');
    setDesc(newEducation[index]?.desc||'');
    setEndDate(newEducation[index]?.endDate||'');
    setAddress(newEducation[index]?.address||'');
    setStatus(newEducation[index]?.status||false);
  };

  return (
    <div>
      <h3>Education Details</h3>
      <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={education.length}/>
      <form onSubmit={handleSubmit} key={index}>
        <InputGroup inputType="text" inputName="eduTitle" inputLabel="Education Title" inputValue={eduTitle} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="month" inputName="endDate" inputLabel="Year of Completion" inputValue={endDate} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="text" inputName="address" inputLabel="Location of Institute" inputValue={address} handleChange={handleChange} disabled={status}/>
        <button disabled={!formStatus}>{status?'Edit':'Submit'}</button>
        <button type="button" onClick={addEntry} disabled={!disableNewEntry}>Add</button>
        <button type="button" onClick={removeEntry} disabled={!education[index]?.status}>Remove</button>
      </form>
    </div>
  );
}

export default Education;


Education.propTypes = {
  getEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
};
