import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

function Preview({ personal, education, experience }) {

  const educationDiv = !education[0]?.status ? [] : education.map((edu, i) => {
    if (!edu.status) return;
    return (
      <div key={i}>
        <div className='flex flex-row justify-between font-bold'>
          <span className='w-4/5 text-[13px]'>{edu.eduTitle}</span>
          <span className='w-1/5 text-[13px] text-right'>{DateTime.fromISO(edu.endDate).toFormat('MMM yyyy')}</span>
        </div>
        <div className='flex flex-row justify-between font-semibold italic'>
          <span className='text-[12px]'>{edu.desc}</span>
          <span className='text-[12px] text-right'>{edu.address}</span>
        </div>
      </div>);
  });
  const experienceDiv = !experience[0]?.status ? [] : experience.map((exp, i) => {
    if (!exp.status) return;
    return (
      <div key={i}>
        <div className='flex flex-row justify-between font-bold'>
          <span className='w-3/5 text-[13px] '>{exp.expCompany}</span>
          <span className='w-2/5 text-[13px] text-right'>{DateTime.fromISO(exp.startDate).toFormat('MMM yyyy')} - {DateTime.fromISO(exp.endDate).toFormat('MMM yyyy')}</span>
        </div>
        <div className='flex flex-row justify-between font-semibold italic'>
          <span className='text-[12px]'>{exp.expTitle}</span>
          <span className='text-[12px] text-right'>{exp.address}</span>
        </div>
        <div className='flex flex-row'>
          <p className='text-[12px]'>{exp.desc}</p>
        </div>
      </div>);
  });

  return (
    <div className='block w-[35rem] mx-auto border-4 border-lg rounded-lg bg-white font-serif text-black'>
      <div id='resume' className='my-6 p-2'>
        <div className='mb-1 flex flex-row justify-between font-bold leading-none'>
          <span className='text-[24px]'>{personal?.firstName} {personal?.lastName}</span>
        </div>
        <div className='flex flex-row justify-start flex-grow leading-none w-11/12'>
          <span className='me-2 text-[12px]'>{personal?.email}</span>
          <span className='me-2 text-[12px]'>{personal?.address}</span>
          <span className='text-[12px]'>{personal?.website}</span>
        </div>
        <div>
          <p className='text-[14px] font-semibold'>PROFESSIONAL SUMMARY</p>
          <hr className='mt-1 h-0.5 bg-black border-0 dark:bg-gray-700' />
          <p className='text-[12px] '>{personal?.profSummary}</p>
        </div>
        <div>
          <p className='text-[14px] font-semibold'>PROFESSIONAL EXPERIENCE</p>
          <hr className='mt-1 h-0.5 bg-black border-0 dark:bg-gray-700' />
          <div>
            {experienceDiv}
          </div>
        </div>
        <div>
          <p className='text-[14px] font-semibold'>EDUCATION</p>
          <hr className='mt-1 h-0.5 bg-black border-0 dark:bg-gray-700' />
          <div>
            {educationDiv}
          </div>
        </div>
      </div>
    </div>);
}

export default Preview;


Preview.propTypes = {
  personal: PropTypes.object,
  education: PropTypes.array,
  experience: PropTypes.array,
};
