import PropTypes from 'prop-types';

function Preview(props) {
  let { personal, education, experience } = props.cv;

  const educationDiv = !education?.status ? [] : education.map((edu, i) => {
    return (
      <div key={i}>
        <div className='flex flex-row justify-between font-bold'>
          <span className='w-4/5 text-2xl'>{edu.eduTitle}</span>
          <span className='w-1/5 text-xl text-right'>{edu.endDate}</span>
        </div>
        <div className='flex flex-row justify-between text-xl font-semibold italic'>
          <span>{edu.desc}</span>
          <span className='text-right'>{edu.address}</span>
        </div>
      </div>);
  });
  const experienceDiv = !experience?.status ? [] : experience.map((exp, i) => {
    return (
      <div key={i}>
        <div className='flex flex-row justify-between font-bold'>
          <span className='w-4/5 text-2xl'>{exp.expCompany}</span>
          <span className='w-1/5 text-xl text-right'>{exp.startDate} - {exp.endDate}</span>
        </div>
        <div className='flex flex-row justify-between text-xl font-semibold italic'>
          <span>{exp.expTitle}</span>
          <span className='text-right'>{exp.address}</span>
        </div>
        <div className='flex flex-row text-lg'>
          <p>{exp.desc}</p>
        </div>
      </div>);
  });

  return (
    <div className='block w-4/5 mt-6 mx-auto border border-4 border-lg rounded-lg bg-white p-2 font-serif '>
      <div className='mb-3'>
        <h2 className='font-bold text-6xl'>
          <span>{!personal ? 'John' : personal.firstName}</span>
          <span>{' '}</span>
          <span>{!personal ? 'Smith' : personal.lastName}</span>
        </h2>
      </div>
      <div className='flex flex-row justify-start leading-none w-3/4'>
        <span className='me-6'>{!personal ? 'JSmith@email.com' : personal.email}</span>
        <span className='me-6'>{!personal ? 'State, Country' : personal.address}</span>
        <span className='me-6'>{!personal ? 'www.site.com' : personal.website}</span>
      </div>
      <div>
        <h3 className='text-3xl font-semibold'>PROFESSIONAL SUMMARY</h3>
        <hr className='h-0.5 bg-black border-0 dark:bg-gray-700' />
        <p className='text-lg'>{!personal ? 'Lorem Ipsum' : personal.profSummary}</p>
      </div>
      <div>
        <h3 className='text-3xl font-semibold'>PROFESSIONAL EXPERIENCE</h3>
        <hr className='h-0.5 bg-black border-0 dark:bg-gray-700' />
        <div>
          {experienceDiv}
        </div>
      </div>
      <div>
        <h3 className='text-3xl font-semibold'>EDUCATION</h3>
        <hr className='h-0.5 bg-black border-0 dark:bg-gray-700' />
        <div>
          {educationDiv}
        </div>
      </div>
    </div>);
}

export default Preview;


Preview.propTypes = {
  cv: PropTypes.object,
};
