import React from 'react';

const Results = ({ searchResults }) => {
  return <div>{searchResults ? searchResults : 'empty.'}</div>;
};

export default Results;
