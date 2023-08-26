import Header from './components/Header';
import Footer from './components/Footer';
import CvBuilder from './CvBuilder';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cv, setCv] = useState({
    personal: null,
    education: [{}],
    experience: [{}],
  });
  const toggleDarkMode = () =>{
    setDarkMode(prevDarkMode=>!prevDarkMode);
  };

  const loadMockData = () => {
    setCv({
      personal: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        address: "Cityville, Country",
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
    <>
      <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} loadMockData={loadMockData}/>
      <CvBuilder darkMode={darkMode} cv={cv} setCv={setCv}/>
      <Footer darkMode={darkMode}/>
    </>
  );
}

export default App;
