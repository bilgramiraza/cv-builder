import PropTypes from 'prop-types';

function Preview({personal, education, experience}) {
  const educationDiv = education.map(edu=>{
    return (<div key={edu.eduTitle}>
      <div>
        <span>{edu.eduTitle}</span>
        <span>{edu.endDate}</span>
      </div>
      <div>
      <span>{edu.desc}</span>
      <span>{edu.address}</span>
      </div>
    </div>);
  });
  const experienceDiv = experience.map(exp=>{
    return (<div key={exp.expTitle}>
      <div>
        <span>{exp.expCompany}</span>
        <span>{exp.startDate}</span>
        <span>{exp.endDate}</span>
      </div>
      <div>
        <span>{exp.expTitle}</span>
        <span>{exp.address}</span>
      </div>
      <div>
        <p>{exp.desc}</p>
      </div>
    </div>);
  });
  return (
    <div>
      <h2>{personal.firstName+' '+personal.lastName}</h2>
      <span>{personal.email}</span>
      <span>{personal.address}</span>
      <span>{personal.website}</span>
      <div>
        <h3>Professional Summary</h3> 
        <p>{personal.profSummary}</p>
      </div>
      <div>
        <h3>EXPERIENCE</h3>
        <div>
          {experienceDiv}
        </div>
      </div>
      <div>
        <h3>EDUCATION</h3>
        <div>
          {educationDiv} 
        </div>
      </div>
    </div>);
}

export default Preview;


Preview.propTypes = {
  personal: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};
