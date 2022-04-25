import React, { useState } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import MainPageLayout from '../layouts/MainPageLayout';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState();

  function getSearchQuery(results) {
    setSearchQuery(results);
  }

  return (
    <MainPageLayout>
      <Search getSearchQuery={getSearchQuery} />
      <Results searchQuery={searchQuery} />
    </MainPageLayout>
  );
};

export default Home;
