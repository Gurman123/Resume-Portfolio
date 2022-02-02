import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
    .then((res) => res.json())
    .then((data) => {
      setResumeData(data)
    });
    
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data = {resumeData.resume}/>
      <Work data = {resumeData.portfolio}/>
      <Contact data = {resumeData.main} />
      <Footer data = {resumeData.main}/>
     
    </div>
  );
}

export default App;
