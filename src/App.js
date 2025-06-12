import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Achieve from './pages/Achievement';
import Academic from './pages/Academic';
import Facility from './pages/Facility';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/msms">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Achievements" element={<Achieve />} />
        <Route path="/Academics" element={<Academic />} />
        <Route path="/Facilities" element={<Facility />} />
      </Routes>
    </Router>
  );
}

export default App;
