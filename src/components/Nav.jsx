import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from '../pages/home'; // Import the Home component
import Contact from '../pages/contact'; // Import the Contact component
import Cost from '../pages/cost'; // Import the Cost component
import About from '../pages/about'; // Import the About component

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cost">Cost</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cost" element={<Cost />} /> {/* Route for the Cost component */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Nav;
