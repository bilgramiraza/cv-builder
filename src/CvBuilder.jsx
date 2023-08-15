import { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import PropTypes from 'prop-types';

function CvBuilder({ darkMode }) {
  const [cv, setCv] = useState({
    personal: null,
    education: [{}],
    experience: [{}],
  });

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

  const loadMockData = () => {
    setCv({
      personal: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        address: "123 Main Street, Cityville, Country",
        website: "https://www.johndoe.com",
        profSummary: "Experienced professional with a proven track record in various fields, including software engineering, project management, and marketing. Skilled in leading cross-functional teams, developing innovative solutions, and driving results. Proficient in multiple programming languages, web development frameworks, and digital marketing strategies. Strong analytical thinker with a creative approach to problem-solving. Recognized for exceptional communication skills and the ability to collaborate effectively with stakeholders at all levels. Passionate about staying up-to-date with industry trends and technologies. Eager to contribute expertise and drive growth within a dynamic organization.",
        status: true,
      },
      education: [
        {
          eduTitle: "Bachelor of Science",
          endDate: "2020-05",
          desc: "Major in Computer Science",
          address: "University of Example",
          status: true,
        },
        {
          eduTitle: "Master of Business Administration",
          endDate: "2022-12",
          desc: "Major in Marketing",
          address: "Business School XYZ",
          status: true,
        },
      ],
      experience: [
        {
          expTitle: "Software Engineer",
          expCompany: "Tech Co. ABC",
          startDate: "2018-06",
          endDate: "2023-07",
          address: "New York, USA",
          desc: "Worked on various projects and developed web applications.",
          status: true,
        },
        {
          expTitle: "Marketing Specialist",
          expCompany: "Marketing Solutions Inc.",
          startDate: "2016-01",
          endDate: "2018-05",
          address: "San Francisco, USA",
          desc: "Led marketing campaigns and analyzed market trends.",
          status: true,
        },
      ],
    });
  };

  return (
    <main className={`${darkMode ? 'dark' : ''} flex flex-col lg:flex-row lg:min-h-[87vh]`}>
      <div className="block w-full lg:w-2/5 px-2 bg-gray-400 dark:bg-gray-900 overflow-auto" key={cv.personal?.status}>
        <Personal getPersonal={(value) => handleSubmit('personal', value)} personal={cv.personal} />
        <Education getEducation={(value) => handleSubmit('education', value)} education={cv.education} />
        <Experience getExperience={(value) => handleSubmit('experience', value)} experience={cv.experience} />
      </div>
      <div className="block border-l-2 border-black w-full lg:w-3/5 px-2 bg-gray-400 dark:border-white dark:bg-gray-900">
        <Preview personal={cv.personal} education={cv.education} experience={cv.experience} loadMockData={loadMockData}/>
      </div>
    </main>
  );
}

export default CvBuilder;

CvBuilder.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
