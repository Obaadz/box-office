import React, { useState, useEffect } from 'react';
import Show from '../components/Show';
import MainPageLayout from '../layouts/MainPageLayout';
import StyledContainer from '../components/StyledContainer';

const Starred = ({ getSavedStarredShows }) => {
  const [starredShows, setStarredShows] = useState(
    getSavedStarredShows() ? getSavedStarredShows() : []
  );

  useEffect(() => {
    localStorage.setItem('starredShows', JSON.stringify(starredShows));
  }, [starredShows]);

  function renderStarredShows() {
    if (starredShows.length === 0) return <div>No shows were added</div>;

    const showsList = starredShows.map(show => {
      return (
        <Show
          key={show.id}
          show={show}
          starredShows={starredShows}
          setStarredShows={setStarredShows}
        />
      );
    });
    return showsList;
  }

  return (
    <MainPageLayout>
      <StyledContainer>{renderStarredShows()}</StyledContainer>
    </MainPageLayout>
  );
};

export default Starred;
