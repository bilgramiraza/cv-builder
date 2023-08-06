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

  const handleChange = (e) => {
    switch (e.target.name) {
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


  return (
    <div>
      <h3 className="mt-2 ms-2 text-2xl font-bold text-black dark:text-white">Experience Details</h3>
      <form className="flex flex-col" onSubmit={handleSubmit} key={index}>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="expCompany" inputLabel="Company Name" inputValue={expCompany} handleChange={handleChange} disabled={status} />
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="expTitle" inputLabel="Job Title" inputValue={expTitle} handleChange={handleChange} disabled={status} />
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="month" inputName="startDate" inputLabel="Start Date" inputValue={startDate} handleChange={handleChange} disabled={status} />
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="month" inputName="endDate" inputLabel="End Date" inputValue={endDate} handleChange={handleChange} disabled={status} />
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3'>
            <InputGroup inputType="desc" inputName="desc" inputLabel="Job Description" inputValue={desc} handleChange={handleChange} disabled={status} />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className={`border ${!formStatus ? 'border-red-700 bg-transparent' : (status ? 'border-blue-700 bg-blue-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900' : 'border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900')} w-1/6 transition ease-in duration-200 text-black dark:text-white`} disabled={!formStatus}>{status ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <EntriesManager index={index} handleIndexChange={handleIndexChange} maxLength={experience.length} />
      <div className="flex justify-center my-4">
        <button type="button" onClick={addEntry} className={'border border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Add</button>
        <button type="button" onClick={removeEntry} className={'border border-red-700 bg-red-300 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-900 w-1/6 transition ease-in duration-200 text-black dark:text-white'}>Remove</button>
      </div>
    </div>
  );
}

export default Experience;


Experience.propTypes = {
  getExperience: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired,
};
