import PropTypes from 'prop-types';

function Preview({personal, education, experience}) {
  const educationDiv = education.map((edu,i)=>{

  });
  const experienceDiv = experience.map((exp,i)=>{

  });
  return (
    <div>
      <h2>{personal.firstName+' '+personal.lastName}</h2>
      <p>{personal.email}</p>
      <div>
        <h3>Professional Summary</h3> 
        <p></p>
      </div>
      <div>
        <h3>EXPERIENCE</h3>
        <div>
          
        </div>
      </div>
      <div>
        <h3>EDUCATION</h3>
        <div>
          
        </div>
      </div>
    </div>);
}

export default Preview;


Preview.propTypes = {
  personal: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};
