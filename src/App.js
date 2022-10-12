import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Reviews from './components/pages/Reviews';
import About from './components/pages/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element=
          { <Home/> } />
          <Route path='/services' exact element=
          { <Services/> } />
          <Route path='/reviews' exact element=
          { <Reviews/> } />
          <Route path='/about' exact element=
          { <About/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
