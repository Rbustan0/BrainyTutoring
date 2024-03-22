// Index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cost from './Cost';
import Contact from './Contact';
import About from './About';

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Index;
