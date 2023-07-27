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

  return (
    <div>
      <h3>Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <InputGroup inputType="text" inputName="firstName" inputLabel="First Name" inputValue={fname} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="text" inputName="lastName" inputLabel="Last Name" inputValue={lname} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="email" inputName="email" inputLabel="Email" inputValue={email} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="text" inputName="address" inputLabel="Address" inputValue={address} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="url" inputName="website" inputLabel="Website/Github link here" inputValue={website} handleChange={handleChange} disabled={status}/>
        <InputGroup inputType="desc" inputName="profSummary" inputLabel="Professional Summary" inputValue={profSummary} handleChange={handleChange} disabled={status}/>
        <button disabled={!formStatus}>{status?'Edit':'Submit'}</button>
      </form>
    </div>
  );
}

export default Personal;


Personal.propTypes = {
  getPersonal: PropTypes.func.isRequired,
  personal: PropTypes.object,
};
