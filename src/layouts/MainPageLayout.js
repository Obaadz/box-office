import React from 'react';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Title />

      <NavBar />

      {children}
    </>
  );
};

export default MainPageLayout;
