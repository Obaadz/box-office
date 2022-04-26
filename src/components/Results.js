import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MAS_SUMMARY_LENGTH = 40;

const Container = styled.div`
  width: 90%;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Show = styled.div`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2 {
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    border-radius: 20px;
  }

  @media (max-width: 992px) {
    & {
      width: 40%;
    }
  }

  @media (max-width: 767px) {
    & {
      width: 70%;

      p {
        max-width: 100%;
      }
    }
  }
`;

const Results = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchList, setSearchList] = useState(null);

  // when there is a query Fetch data from the API then set this data to searchResults.
  useEffect(() => {
    getSearchResults(searchQuery);
  }, [searchQuery]);

  // when searchResults changed, check if the query empty or there is no results for the query, if there is, then render a list of those shows.
  useEffect(() => {
    if (!searchQuery || searchResults.length === 0) return;

    setSearchList(
      searchResults.map(result => {
        const regex = /(<\/?p>)|<\/?b>/gi;

        const id = result.show.id;
        const name = result.show.name;
        const summary = result.show.summary
          ? result.show.summary
              .replaceAll(regex, '')
              .slice(0, MAS_SUMMARY_LENGTH) + '...'
          : 'There is no Description';
        const image = result.show.image;
        if (!image) return false;

        return (
          <Show key={id}>
            <img src={image.medium} alt={name} />
            <h2>{name}</h2>
            <p>{summary}</p>
          </Show>
        );
      })
    );
  }, [searchResults]);

  async function getSearchResults(searchQuery) {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchQuery}`
    );

    setSearchResults(response.data);
  }

  return <Container>{searchList ? searchList : 'Empty'}</Container>;
};

export default Results;
