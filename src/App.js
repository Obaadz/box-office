import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/starred"
        element={<Starred starredShows={[{ id: 1, name: 'girls' }]} />}
      />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
