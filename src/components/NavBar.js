import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const pages = [
  { id: 1, path: '/box-office/', text: 'Home' },
  { id: 2, path: '/box-office/starred', text: 'Starred' },
];

const renderPages = currentLocation =>
  pages.map(({ id, path, text }) => (
    <li key={id}>
      <Link to={path} className={path === currentLocation ? 'active' : ''}>
        {text}
      </Link>
    </li>
  ));

const StyledNavBar = styled.div`
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;

    a {
      position: relative;
      padding: 5px 10px;
      text-decoration: none;
      color: rgb(198, 198, 198);
      transition: 0.3s all;

      &.active {
        color: blue;
      }
      &.active::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: blue;
      }
    }
  }
`;

const NavBar = () => {
  const currentLocation = useLocation();
  return (
    <StyledNavBar>
      <ul>{renderPages(currentLocation.pathname)}</ul>
    </StyledNavBar>
  );
};

export default NavBar;
