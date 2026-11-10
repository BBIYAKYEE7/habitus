import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SetlistPage from './SetlistPage';
import ConcertInfoPage from './ConcertInfoPage';
import ArchivePage from './ArchivePage';
import RecruitPage from './RecruitPage';
import { concert2026 } from './winterConcert2026';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setlist" element={<SetlistPage />} />
        <Route path="/concert-info" element={<ConcertInfoPage />} />
        <Route path={concert2026.setlistPath} element={<SetlistPage key="2026" is2026 />} />
        <Route path={concert2026.infoPath} element={<ConcertInfoPage is2026 />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
