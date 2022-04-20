import React, { useState } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import MainPageLayout from '../layouts/MainPageLayout';

const Home = () => {
  const [searchResults, setSearchResults] = useState();

  function getSearchResults(results) {
    setSearchResults(results);
  }

  return (
    <MainPageLayout>
      {console.count('how times: ')}
      <Search getSearchResults={getSearchResults} />
      <Results searchResults={searchResults} />
    </MainPageLayout>
  );
};

export default Home;
