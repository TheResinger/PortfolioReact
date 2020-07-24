import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
// import ContactForm from './Components/Mail';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Projects} />
      <Route exact path="/" component={Resume} />
      {/* <Route exact path="/" component={ContactForm} /> */}
      <Route exact path="/" component={Footer} />
    </Router>
  );
}

export default App;
