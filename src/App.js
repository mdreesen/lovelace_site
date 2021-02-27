import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointments from './pages/Appointment';
import Contact from './pages/Contact';

// import components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/appointments" component={Appointments}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
