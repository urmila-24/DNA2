import React from 'react';
import { BrowserRouter as Router ,Route,  Routes } from 'react-router-dom';



import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import SignUP from './components/pages/SignUP';
import DNA from './components/pages/DNA';
import Output1 from './components/pages/Output1';
import Output2 from './components/pages/Output2';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About/*" element={<About />} />
          <Route path="Contacts/*" element={<Contacts />} />
          <Route path="SignUP/*" element={<SignUP />} />
         
          <Route path="DNA/*" element={<DNA />} />
          <Route path="Output1/*" element={<Output1 />} />
          <Route path="Output2/*" element={<Output2 />} />

          


        </Routes>
      </Router>
    </>
  );
}

export default App;

