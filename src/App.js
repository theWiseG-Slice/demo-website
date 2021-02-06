import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import aboutUs from './components/aboutUs';
import contact from './components/contact';
import { footer as Footer } from './components/footer';
import homepage from './components/homepage';
import { navBar as Navigation } from './components/navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <h1>Website</h1>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
