import PropTypes from 'prop-types';

function InputGroup({inputName, inputType, inputLabel, inputValue, handleChange}) {
  let inputGroup;
  switch(inputType){
    case 'desc':
      inputGroup = (
        <div>
          <label htmlFor={inputName}>{inputLabel}</label>
          <textarea name={inputName} onChange={handleChange} value={inputValue} />
        </div>
      );
      break;
    default:
      inputGroup = (
        <div>
          <label htmlFor={inputName}>{inputLabel}</label>
          <input type={inputType} name={inputName} onChange={handleChange} value={inputValue}/>
        </div>
      );
      break;
  }
  return inputGroup;
}

InputGroup.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGroup;
