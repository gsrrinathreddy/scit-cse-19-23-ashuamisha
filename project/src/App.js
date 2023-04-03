import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutme from './Pages/Aboutme';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contactme from './Pages/Contactme';
import Certifications from './Pages/Certifications';
import Qualifications from './Pages/Qualifications';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path="Aboutme" element={<Aboutme/>}/>
       <Route path="Experience" element={<Experience/>}/>
       <Route path="Hobbies" element={<Hobbies/>}/>
       <Route path="Skills" element={<Skills/>}/>
       <Route path="Qualifications" element={<Qualifications/>}/>
       <Route path="Projects" element={<Projects/>}/>
       <Route path="Contactme" element={<Contactme/>}/>
       <Route path="Certifications" element={<Certifications/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
