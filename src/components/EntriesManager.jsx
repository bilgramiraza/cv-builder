import PropTypes from 'prop-types';

function EntriesManager({index, setIndex, maxLength}) {
  const incrementIndex = () =>{
    if(index<maxLength)
      setIndex(index+1);
  }
  const decrementIndex = () =>{
    if(index>=0)
      setIndex(index-1);
  }
  let navDiv=[];
  for(let i=0;i<maxLength;i++){ 
    navDiv.push(
      <a key={i} onClick={()=>setIndex(i)}>{i+1}</a>
    );
  }
  return (
    <div>
      <button onClick={incrementIndex}>+</button>
      <div>
        {navDiv}
      </div>
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
