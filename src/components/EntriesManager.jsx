import PropTypes from 'prop-types';

function EntriesManager({index, setIndex, maxLength}) {
  const incrementIndex = () =>{
    if(index<maxLength-1){
      setIndex(index+1);
    }
  }
  const decrementIndex = () =>{
    if(index>0){
      setIndex(index-1);
    }
  }
  let navDiv=[];
  let navItem;
  for(let i=0;i<maxLength;i++){ 
    if(i===index){
      navItem = <a key={i} onClick={()=>setIndex(i)}>|{i+1}|</a>
    }else{
      navItem = <a key={i} onClick={()=>setIndex(i)}>{i+1}</a>
    }
    navDiv.push(navItem);
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
