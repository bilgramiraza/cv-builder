import PropTypes from 'prop-types';

function EntriesManager({index, setIndex, maxLength}) {
  const incrementIndex = () =>{
    setIndex(index+1);
  }
  const decrementIndex = () =>{
    if(index>=maxLength)
    setIndex(index-1);
  }
  return (
    <div>
      <button onClick={incrementIndex}>+</button>
      <button onClick={decrementIndex}>-</button>
    </div>
  );
}

export default EntriesManager;


EntriesManager.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};
