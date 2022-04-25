import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MAS_SUMMARY_LENGTH = 40;

const Results = ({ searchQuery }) => {
  const query = searchQuery;
  const [searchResults, setSearchResults] = useState(null);
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    getSearchResults(query);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    setSearchList(
      searchResults.map(result => {
        const regex = /(<\/?p>)|<\/?b>/gi;

        const name = result.show.name;
        const summary = result.show.summary
          ? result.show.summary
              .replaceAll(regex, '')
              .slice(0, MAS_SUMMARY_LENGTH) + '...'
          : 'There is no Description';
        const image = result.show.image;
        if (!image) return;

        return (
          <div>
            <img src={image.medium} alt={name} />
            <h2>{name}</h2>
            <p>{summary}</p>
          </div>
        );
      })
    );
  }, [searchResults]);

  async function getSearchResults() {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );

    setSearchResults(response.data);
  }

  return <div>{searchList ? searchList : 'Empty'}</div>;
};

export default Results;
