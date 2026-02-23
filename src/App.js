import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SetlistPage from './SetlistPage';
import ConcertInfoPage from './ConcertInfoPage';
import ConcertsPage from './ConcertsPage';
import ArchivePage from './ArchivePage';
import RecruitPage from './RecruitPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setlist" element={<SetlistPage />} />
        <Route path="/concert-info" element={<ConcertInfoPage />} />
        <Route path="/concerts" element={<ConcertsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
