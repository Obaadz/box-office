import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StyledContainer from './StyledContainer';
import Show from './Show';

const MAS_SUMMARY_LENGTH = 40;

const Results = ({ searchQuery, setIsSearching, savedStarredShows }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [starredShows, setStarredShows] = useState(
    savedStarredShows ? savedStarredShows : []
  );
  // when there is a query Fetch data from the API then set this data to searchResults.
  useEffect(() => {
    getSearchResults(searchQuery, setIsSearching);
  }, [searchQuery]);

  // when searchResults changed, check if the query empty or there is no results for the query, if there is, then render a list of those shows.
  useEffect(() => {
    if (!searchQuery || searchResults.length === 0) {
      if (searchQuery && searchResults.length === 0)
        setSearchList(
          `There are no results for: "${searchQuery}" from our database :(`
        );

      setIsSearching(false);
      return;
    }

    setSearchList(
      searchResults.map(result => {
        const regex = /(<\/?p>)|<\/?b>/gi;

        const show = {
          id: result.show.id,
          name: result.show.name,
          summary: result.show.summary
            ? result.show.summary
                .replaceAll(regex, '')
                .slice(0, MAS_SUMMARY_LENGTH) + '...'
            : 'There is no Description',
          image: result.show.image,
        };
        if (!show.image) return false;

        return (
          <Show
            // starredShowsIDs={starredShowsIDs}
            key={show.id}
            show={show}
            starredShows={starredShows}
            setStarredShows={setStarredShows}
          />
        );
      })
    );
  }, [searchResults]);

  useEffect(() => {
    localStorage.setItem('starredShows', JSON.stringify(starredShows));
  }, [starredShows]);

  async function getSearchResults(searchQuery, setIsSearching) {
    setIsSearching(true);
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchQuery}`
    );
    setSearchResults(response.data);
    setIsSearching(false);
  }

  return <StyledContainer>{searchList ? searchList : 'Empty'}</StyledContainer>;
};

export default Results;
