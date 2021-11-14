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

          


        </Routes>
      </Router>
    </>
  );
}

export default App;

