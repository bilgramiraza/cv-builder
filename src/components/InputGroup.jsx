import PropTypes from 'prop-types';

function InputGroup({inputName, inputType, inputLabel, inputValue, handleChange}) {
  let inputGroup;
  switch(inputType){
    case 'desc':
      inputGroup = (
        <textarea 
          id={inputName} 
          name={inputName} 
          onChange={handleChange} 
          value={inputValue} 
        />
      );
      break;
    default:
      inputGroup = (
        <input 
          id={inputName} 
          type={inputType} 
          name={inputName} 
          onChange={handleChange} 
          value={inputValue}
        />
      );
      break;
  }
  return (
    <div>
      <label htmlFor={inputName}>{inputLabel}</label>
      {inputGroup}
    </div>
  );
}

InputGroup.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGroup;
