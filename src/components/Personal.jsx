import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./InputGroup";

function Personal({getPersonal, personal}) {
  const [fname, setFname] = useState(personal?.firstName||'');
  const [lname, setLname] = useState(personal?.lastName||'');
  const [email, setEmail] = useState(personal?.email||'');
  const [address, setAddress] = useState(personal?.address||'');
  const [website, setWebsite] = useState(personal?.website||'');
  const [profSummary, setProfSummary] = useState(personal?.profSummary||'');
  const [status, setStatus] = useState(personal?.status||false);

  const formStatus = fname&&lname&&email&&address&&website&&profSummary;
  const [showForm, setShowForm] = useState(true);
  
  const handleChange = (e) =>{
    switch(e.target.name){
      case 'firstName':
        setFname(e.target.value);
        break;
      case 'lastName':
        setLname(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'address':
        setAddress(e.target.value);
        break;
      case 'website':
        setWebsite(e.target.value);
        break;
      case 'profSummary':
        setProfSummary(e.target.value);
        break;
      default:
        throw new Error('How did we get Here');
    }
  };

  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!status){
      const data = {
        firstName:fname,
        lastName:lname,
        email,
        address,
        website,
        profSummary,
        status:true,
      };
      getPersonal(data);
      setStatus(true);
    }else{
      const data = {
        ...personal,
        status:false,
      };
      getPersonal(data);
      setStatus(false);
    }
  };

  const toggleForm = () =>{
    setShowForm(!showForm);
  };

  return (
    <div className="border-2 border-black rounded mt-2 dark:border-white">
      <div className="flex flex-row border-b-2 border-black py-2 ps-2 rounded-t bg-gray-300 justify-between dark:bg-gray-800 cursor-pointer dark:border-white" onClick={toggleForm}>
        <h3 className="text-2xl font-bold text-black dark:text-white">Personal Details</h3>
        <div className="mr-2 mt-1">
          <svg className={`${showForm?'rotate-180':''} stroke-black stroke-2 dark:stroke-white transition ease-in duration-200`} fill="none" height="24" shapeRendering="geometricPrecision" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={`flex flex-col pb-2 ${showForm?'':'hidden'}`}>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="firstName" inputLabel="First Name" inputValue={fname} handleChange={handleChange} disabled={status}/>
          </div>
          <div className='block w-full ms-3 lg:w-1/2 '>
            <InputGroup inputType="text" inputName="lastName" inputLabel="Last Name" inputValue={lname} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex flex-col w-full my-1.5 lg:flex-row">
          <div className='block w-full ms-3 lg:w-1/3 '>
            <InputGroup inputType="email" inputName="email" inputLabel="Email" inputValue={email} handleChange={handleChange} disabled={status}/>
          </div>
          <div className='block w-full ms-3 lg:w-1/3 '>
            <InputGroup inputType="text" inputName="address" inputLabel="Address" inputValue={address} handleChange={handleChange} disabled={status}/>
          </div>
          <div className='block w-full ms-3 lg:w-1/3 '>
            <InputGroup inputType="url" inputName="website" inputLabel="Website/Github link here" inputValue={website} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex flex-col w-auto my-1.5 lg:flex-row">
          <div className='block w-full ms-3'>
            <InputGroup inputType="desc" inputName="profSummary" inputLabel="Professional Summary" inputValue={profSummary} handleChange={handleChange} disabled={status}/>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button className={`border ${!formStatus?'border-red-700 bg-transparent':(status?'border-blue-700 bg-blue-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900':'border-green-700 bg-green-300 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-900')} w-1/6 transition ease-in duration-200 text-black dark:text-white`} disabled={!formStatus}>{status?'Edit':'Submit'}</button>
        </div>
      </form>
    </div>
  );
}
export default Personal;


Personal.propTypes = {
  getPersonal: PropTypes.func.isRequired,
  personal: PropTypes.object,
};
