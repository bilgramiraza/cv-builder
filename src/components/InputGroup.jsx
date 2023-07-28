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
          className={`block w-full px-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border text-black ${isValid ?'border-gray-300':'border-red-500'} rounded-r-md`}
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
          className={`block w-3/4 px-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border text-black ${isValid ?'border-gray-300':'border-red-500'} rounded-r-md`}
        />
      );
      break;
  }
  return (
    <div className='flex items-start'>
      <label htmlFor={inputName} className='block mt-3 text-start text-lg sm:text-sm font-medium text-gray-300'>
        {inputLabel}
      </label>
      <div className='flex items-center mt-1'>
        {inputGroup}      
    </div>
    {!isValid && <div className="text-red-600 text-sm mt-1">Invalid Input</div>}
    </div>
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
