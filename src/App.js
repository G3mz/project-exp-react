import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import RegistrPage from './components/registrpage/registrpage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registr" element={<RegistrPage />} />
      </Routes>
    </Router>
  );
};

export default App;

