import { useState } from "react";
import PropTypes from 'prop-types';
import InputGroup from "./components/InputGroup";

function Personal({getPersonal}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  
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
      default:
        throw new Error('How did we get Here');
    }
  };

  const handleSubmit= (e) =>{
    e.preventDefault();
    const data = {
      firstName:fname,
      lastName:lname,
      email,
    };
    getPersonal(data);
  };

  return (
    <div>
      <h3>Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <InputGroup inputType="text" inputName="firstName" inputLabel="First Name" inputValue={fname} handleChange={handleChange}/>
        <InputGroup inputType="text" inputName="lastName" inputLabel="Last Name" inputValue={lname} handleChange={handleChange}/>
        <InputGroup inputType="email" inputName="email" inputLabel="Email" inputValue={email} handleChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Personal;


Personal.propTypes = {
  getPersonal: PropTypes.func.isRequired,
};
