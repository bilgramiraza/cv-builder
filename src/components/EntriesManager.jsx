import PropTypes from 'prop-types';

function EntriesManager({index, handleIndexChange, maxLength}) {
  const navBaseClass='bg-gray-300 border border-gray-600 text-black hover:bg-gray-500 hover:text-white leading-tight py-2 px-3 dark:bg-gray-700 dark:border-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black cursor-pointer';
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
      navItem = <a href='#' className='bg-gray-500 border border-gray-600 text-white hover:bg-gray-300 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-gray-300 dark:border-white dark:text-gray-900 dark:hover:bg-gray-50 dark:hover:text-black cursor-pointer' onClick={()=>handleIndexChange(i)}>{i+1}</a>
    }else{
      navItem = <a href='#' className={navBaseClass} onClick={()=>handleIndexChange(i)}>{i+1}</a>
    }
    navDiv.push(<li key={i} >{navItem}</li>);
  }
  return (
    <nav className='flex justify-center my-2'>
      <ul className='flex flex-row'>
        <li>
          <a href='#' className={`${navBaseClass} rounded-l-lg `} onClick={decrementIndex}>Previous</a>
        </li>
        {navDiv}
        <li>
          <a href='#' className={`${navBaseClass} rounded-r-lg`} onClick={incrementIndex}>Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default EntriesManager;


EntriesManager.propTypes = {
  index: PropTypes.number.isRequired,
  handleIndexChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};
