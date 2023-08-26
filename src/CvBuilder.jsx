import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';

function CvBuilder({ darkMode, cv, setCv }) {

  const handleSubmit = (category, value) => {
    switch (category) {
      case 'personal':
        setCv({
          ...cv,
          personal: value,
        });
        break;
      case 'education':
        setCv({
          ...cv,
          education: value,
        });
        break;
      case 'experience':
        setCv({
          ...cv,
          experience: value,
        });
        break;
      default:
        throw new Error('Invalid Category passed to SubmitHandler');
    }
  };

  const togglePDFButton = cv?.personal?.status&&cv?.education[0]?.status&&cv?.experience[0]?.status;

  const generatePDF = async() =>{
    const resume = new jsPDF('portrait', 'pt', 'a4');
    await resume.html(document.querySelector('#resume'));
    resume.save(`${cv.personal.firstName} ${cv.personal.lastName} Resume.pdf`);
  };

  return (
    <main className={`${darkMode ? 'dark' : ''} flex flex-col lg:flex-row lg:min-h-[87vh]`}>
      <div className="block w-full lg:w-2/5 px-2 bg-gray-400 dark:bg-gray-900 overflow-auto" key={cv.personal?.status}>
        <Personal getPersonal={(value) => handleSubmit('personal', value)} personal={cv.personal} />
        <Education getEducation={(value) => handleSubmit('education', value)} education={cv.education} />
        <Experience getExperience={(value) => handleSubmit('experience', value)} experience={cv.experience} />
      </div>
      <div className="relative block border-l-2 border-black w-full lg:w-3/5 p-2 bg-gray-400 dark:border-white dark:bg-gray-900 overflow-x-auto">
        <Preview personal={cv.personal} education={cv.education} experience={cv.experience} />
        {
          togglePDFButton && 
          (<div className='max-md:sticky lg:absolute max-md:inset-x-0 max-md:bottom-0 lg:top-2 lg:right-2 text-center'>
            <button className='bg-gray-500 border border-gray-900 rounded-xl text-white font-semibold text-xl hover:bg-gray-300 hover:text-gray-900 leading-tight p-2 m-2 cursor-pointer' onClick={generatePDF}>Generate PDF</button>
          </div>)
        }
      </div>
    </main>
  );
}

export default CvBuilder;

CvBuilder.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  cv: PropTypes.object.isRequired,
  setCv: PropTypes.func.isRequired,
};
