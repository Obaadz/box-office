import React from 'react';
import Show from '../components/Show';
import MainPageLayout from '../layouts/MainPageLayout';

const Starred = ({ starredShows }) => {
  function renderStarredShows(starredShows) {
    if (!starredShows) return <div>'No shows were added</div>;

    const showsList = starredShows.map(show => {
      // return <Show key={show.id} show={show} />;
      return 'Show';
    });
    return showsList;
  }

  return <MainPageLayout>{renderStarredShows(starredShows)}</MainPageLayout>;
};

export default Starred;
