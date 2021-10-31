import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from './components/pages/About';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import SignUP from './components/pages/SignUP'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/SignUP' component={SignUP} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

