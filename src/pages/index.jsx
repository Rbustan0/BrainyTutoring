import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Cost from './cost';
import Contact from './contact';
import About from './about';

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
