import React from 'react';
import MainPageLayout from '../layouts/MainPageLayout';

const Starred = ({ starredShows }) => {
  function renderStarredShows(starredShows) {
    if (!starredShows) return 'No shows were added';
  }

  return <MainPageLayout>{renderStarredShows(starredShows)}</MainPageLayout>;
};

export default Starred;
