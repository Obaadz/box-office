import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Show from './Show';

const MAS_SUMMARY_LENGTH = 40;

const Container = styled.div`
  width: 90%;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Results = ({ searchQuery, setIsSearching }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [starredShows, setStarredShows] = useState([]);
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
          isStarred: starredShows.some(
            starredShow => starredShow.id === result.show.id
          ),
        };
        if (!show.image) return false;

        return (
          <Show
            // starredShowsIDs={starredShowsIDs}
            key={show.id}
            show={show}
            handleStar={starShow}
          />
        );
      })
    );
  }, [searchResults]);

  async function getSearchResults(searchQuery, setIsSearching) {
    setIsSearching(true);
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchQuery}`
    );
    setSearchResults(response.data);
    setIsSearching(false);
  }

  function starShow(show, setIsStarred) {
    if (show.isStarred) {
      setIsStarred(false);
      show.isStarred = false;

      setStarredShows(
        starredShows.filter(starredShow => {
          return starredShow.id !== show.id;
        })
      );
    } else {
      setIsStarred(true);
      show.isStarred = true;

      setStarredShows(prevStarredShows => [...prevStarredShows, show]);
    }
  }

  return <Container>{searchList ? searchList : 'Empty'}</Container>;
};

export default Results;
