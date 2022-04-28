import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  function getSavedStarredShows() {
    const starredShowsJSON = localStorage.getItem('starredShows');
    const starredShows = JSON.parse(starredShowsJSON);

    return starredShows;
  }

  return (
    <Routes>
      <Route
        path="box-office"
        element={<Home getSavedStarredShows={getSavedStarredShows} />}
      />

      <Route
        path="box-office/starred"
        element={<Starred getSavedStarredShows={getSavedStarredShows} />}
      />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
