import PropTypes from 'prop-types';
import { useState } from 'react';

function InputGroup({inputName, inputType, inputLabel, inputValue, handleChange, disabled}) {
  const [isValid, setIsValid] = useState(true);
  const handleInputChange = (e) => {
    handleChange(e);
    setIsValid(e.target.validity.valid);
  };
  let inputGroup;
  switch(inputType){
    case 'desc':
      inputGroup = (
        <textarea 
          id={inputName} 
          name={inputName} 
          onChange={handleInputChange} 
          value={inputValue} 
          disabled={disabled}
          rows={4}
          className={`w-11/12 px-1 py-1 text-sm lg:text-base text-black rounded-r-md bg-gray-300 text-black border ${isValid ?'border-gray-300':'border-red-500'} focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
        />
      );
      break;
    default:
      inputGroup = (
        <input 
          id={inputName} 
          type={inputType} 
          name={inputName} 
          onChange={handleInputChange} 
          value={inputValue}
          disabled={disabled}
          className={`w-11/12 px-1 py-1 text-sm lg:text-base text-black rounded-r-md bg-gray-300 text-black border ${isValid ?'border-gray-300':'border-red-500'} focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
        />
      );
      break;
  }
  return (
    <>
      <label htmlFor={inputName} className='flex w-auto mt-3 text-start text-xs 2xl:text-lg text-black dark:text-white'>
        {inputLabel}
      </label>
      <div className='flex w-auto mt-1 '>
        {inputGroup}      
      </div>
      {!isValid && <div className="text-red-600 text-sm mt-1">Invalid Input</div>}
    </>
  );
}

InputGroup.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default InputGroup;
