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

  const formStatus = eduTitle&&desc&&endDate&&address;
  const [showForm, setShowForm] = useState(true);
  
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
    setEndDate(education[i].endDate||'');
    setAddress(education[i].address||'');
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
    let newEducation;
    if(education.length===1){
      newEducation = [{}];
    }else{
      newEducation = [...education];
      newEducation.splice(index,1);
    }

    getEducation(newEducation);
    setEduTitle(newEducation[index]?.eduTitle||'');
    setDesc(newEducation[index]?.desc||'');
    setEndDate(newEducation[index]?.endDate||'');
    setAddress(newEducation[index]?.address||'');
    setStatus(newEducation[index]?.status||false);
  };

  const toggleForm = () =>{
    setShowForm(!showForm);
  };

  return (
    <div className="border-2 border-black rounded mt-2 dark:border-white">
      <div className="flex flex-row border-b-2 border-black py-2 ps-2 rounded-t bg-gray-300 dark:bg-gray-800 justify-between cursor-pointer dark:border-white" onClick={toggleForm}>
        <h3 className="text-2xl font-bold text-black dark:text-white">Education Details</h3>
        <div className="mr-2 mt-1">
          <svg className={`${showForm?'rotate-180':''} stroke-black stroke-2 dark:stroke-white transition ease-in duration-200`} fill="none" height="24" shapeRendering="geometricPrecision" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </div>
      </div>
      <form className={`flex flex-col pb-2 ${showForm?'':'hidden'}`} onSubmit={handleSubmit} key={index}>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3'>
            <InputGroup inputType="text" inputName="eduTitle" inputLabel="Education Title" inputValue={eduTitle} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="address" inputLabel="Location of Institute" inputValue={address} handleChange={handleChange} disabled={status}/>
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="month" inputName="endDate" inputLabel="Year of Completion" inputValue={endDate} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3'>
            <InputGroup inputType="desc" inputName="desc" inputLabel="Description" inputValue={desc} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className={`border ${!formStatus?'border-red-700 bg-transparent':(status?'border-blue-700 bg-blue-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900':'border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900')} w-1/6 transition ease-in duration-200 text-black dark:text-white`} disabled={!formStatus} type="submit">{status?'Edit':'Submit'}</button>
        </div>
        <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={education.length}/>
        <div className="flex justify-center my-2">
          <button type="button" onClick={addEntry} className={'border border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Add</button>
          <button type="button" onClick={removeEntry} className={'border border-red-700 bg-red-300 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Remove</button>
        </div>
      </form>
    </div>
  );
}

export default Education;


Education.propTypes = {
  getEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
};
