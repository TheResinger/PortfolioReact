import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Projects} />
      <Route exact path="/" component={Resume} />
    </Router>
  );
}

export default App;
