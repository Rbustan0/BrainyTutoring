import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Headers from './components/Headers';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Index from './pages/index';

const App = () => {
  return (
    <Router>
      <div>
        <Headers />
        <Nav />
        <Index />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
