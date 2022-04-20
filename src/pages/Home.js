import React from 'react';
import Search from '../components/Search';
import MainPageLayout from '../layouts/MainPageLayout';

const Home = () => {
  return (
    <MainPageLayout>
      <Search />
      {/* <Result of search /> */}
    </MainPageLayout>
  );
};

export default Home;
