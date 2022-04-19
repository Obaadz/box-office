import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { id: 1, path: '/', text: 'Home' },
  { id: 2, path: '/starred', text: 'Starred' },
];
const pagesList = pages.map(({ id, path, text }) => (
  <Link key={id} to={path}>
    {text}
  </Link>
));

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>{pagesList}</ul>
    </div>
  );
};

export default NavBar;
