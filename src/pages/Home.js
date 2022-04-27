import React, { useState } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import MainPageLayout from '../layouts/MainPageLayout';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    results: '',
    setIsSearching: () => {},
  });

  function getSearchQuery(results, setIsSearching) {
    setSearchQuery({
      results: results,
      setIsSearching: setIsSearching,
    });
  }

  return (
    <MainPageLayout>
      <Search getSearchQuery={getSearchQuery} />
      <Results
        searchQuery={searchQuery.results ? searchQuery.results : ''}
        setIsSearching={searchQuery.setIsSearching}
      />
    </MainPageLayout>
  );
};

export default Home;
