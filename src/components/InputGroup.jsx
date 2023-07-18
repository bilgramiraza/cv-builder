import PropTypes from 'prop-types';

function InputGroup({inputName, inputType, inputLabel}) {
  return (
    <div>
      <label htmlFor={inputName}>{inputLabel}</label>
      <input type={inputType} name={inputName} />
    </div>
  );
}

InputGroup.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};

export default InputGroup;
