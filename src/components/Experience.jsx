import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";
import EntriesManager from "./EntriesManager";

function Experience({ getExperience, experience }) {
  const [index, setIndex] = useState(0);

  const [expCompany, setExpCompany] = useState(experience[index]?.expCompany || '');
  const [expTitle, setExpTitle] = useState(experience[index]?.expTitle || '');
  const [startDate, setStartDate] = useState(experience[index]?.startDate || '');
  const [endDate, setEndDate] = useState(experience[index]?.endDate || '');
  const [desc, setDesc] = useState(experience[index]?.desc || '');
  const [status, setStatus] = useState(experience[index]?.status || false);

  const formStatus = expCompany && expTitle && startDate && endDate && desc;
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'expCompany':
        setExpCompany(e.target.value);
        break;
      case 'expTitle':
        setExpTitle(e.target.value);
        break;
      case 'expStartDate':
        setStartDate(e.target.value);
        break;
      case 'expEndDate':
        setEndDate(e.target.value);
        break;
      case 'expDesc':
        setDesc(e.target.value);
        break;
      default:
        throw new Error('Invalid Input Name');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience[index].status) {
      const newExperience = experience.map((exp, i) => i === index ? { ...exp, status: false } : exp);
      getExperience(newExperience);
      setStatus(false);
      return;
    }
    const newExperience = experience.map((exp, i) => i === index ? { expCompany, expTitle, startDate, endDate, desc, status: true } : exp);
    getExperience(newExperience);
    setStatus(true);
    return;
  };

  const handleIndexChange = (i) => {
    setIndex(i);
    setExpCompany(experience[i]?.expCompany || '');
    setExpTitle(experience[i]?.expTitle || '');
    setStartDate(experience[i]?.startDate || '');
    setEndDate(experience[i]?.endDate || '');
    setDesc(experience[i]?.desc || '');
    setStatus(experience[i]?.status || false);
  };

  const addEntry = () => {
    setIndex(index + 1);
    const newExperience = [...experience];
    newExperience.splice(index + 1, 0, {});
    getExperience(newExperience);
    setExpCompany('');
    setExpTitle('');
    setStartDate('');
    setEndDate('');
    setDesc('');
    setStatus(false);
  };

  const removeEntry = () => {
    let newExperience;
    if (experience.length === 1) {
      newExperience = [{}];
    } else {
      newExperience = [...experience];
      newExperience.splice(index, 1);
    }

    getExperience(newExperience);
    setExpCompany(newExperience[index]?.expCompany || '');
    setExpTitle(newExperience[index]?.expTitle || '');
    setStartDate(newExperience[index]?.startDate || '');
    setEndDate(newExperience[index]?.endDate || '');
    setDesc(newExperience[index]?.desc || '');
    setStatus(newExperience[index]?.status || false);
  };

  const toggleForm = () =>{
    setShowForm(!showForm);
  };

  return (
    <div className="border-2 border-black rounded my-2 dark:border-white">
      <div className="flex flex-row border-b-2 border-black py-2 ps-2 rounded-t bg-gray-300 dark:bg-gray-800 justify-between cursor-pointer dark:border-white" onClick={toggleForm}>
        <h3 className="text-2xl font-bold text-black dark:text-white">Experience Details</h3>
        <div className="mr-2 mt-1">
          <svg className={`${showForm?'rotate-180':''} stroke-black stroke-2 dark:stroke-white transition ease-in duration-200`} fill="none" height="24" shapeRendering="geometricPrecision" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </div>
      </div>
      <form className={`flex flex-col pb-2 ${showForm?'':'hidden'}`} onSubmit={handleSubmit} key={index}>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="expCompany" inputLabel="Company Name" inputValue={expCompany} handleChange={handleChange} placeHolder="Acme Corp" disabled={status} />
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="expTitle" inputLabel="Job Title" inputValue={expTitle} handleChange={handleChange} placeHolder="Lead Tester" disabled={status} />
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="month" inputName="expStartDate" inputLabel="Start Date" inputValue={startDate} handleChange={handleChange} disabled={status} />
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="month" inputName="expEndDate" inputLabel="End Date" inputValue={endDate} handleChange={handleChange} disabled={status} />
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3'>
            <InputGroup inputType="desc" inputName="expDesc" inputLabel="Job Description" inputValue={desc} handleChange={handleChange} placeHolder="Lead Tester for the Acme Corp" disabled={status} />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className={`border ${!formStatus ? 'border-red-700 bg-transparent' : (status ? 'border-blue-700 bg-blue-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900' : 'border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900')} w-1/6 transition ease-in duration-200 text-black dark:text-white`} disabled={!formStatus}>{status ? 'Edit' : 'Submit'}</button>
        </div>
        <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={experience.length} />
        <div className="flex justify-center my-2">
          <button type="button" onClick={addEntry} className={'border border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Add</button>
          <button type="button" onClick={removeEntry} className={'border border-red-700 bg-red-300 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Remove</button>
        </div>
      </form>
    </div>
  );
}

export default Experience;


Experience.propTypes = {
  getExperience: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired,
};
