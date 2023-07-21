import PropTypes from 'prop-types';

function EntriesManager({index, handleIndexChange, maxLength}) {
  const incrementIndex = () =>{
    if(index<maxLength-1){
      handleIndexChange(index+1);
    }
  }
  const decrementIndex = () =>{
    if(index>0){
      handleIndexChange(index-1);
    }
  }
  let navDiv=[];
  let navItem;
  for(let i=0;i<maxLength;i++){ 
    if(i===index){
      navItem = <a key={i} onClick={()=>handleIndexChange(i)}>|{i+1}|</a>
    }else{
      navItem = <a key={i} onClick={()=>handleIndexChange(i)}>{i+1}</a>
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
  handleIndexChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};
