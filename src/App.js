import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SetlistPage from './SetlistPage';
import ConcertInfoPage from './ConcertInfoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setlist" element={<SetlistPage />} />
        <Route path="/concert-info" element={<ConcertInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
