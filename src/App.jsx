import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import CvBuilder from './CvBuilder';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () =>{
    setDarkMode(prevDarkMode=>!prevDarkMode);
  };
  return (
    <>
      <Header darkMode={darkMode} handleDarkMode={toggleDarkMode}/>
      <CvBuilder darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </>
  );
}

export default App;
