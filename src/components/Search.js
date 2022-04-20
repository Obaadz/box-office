import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const StyledBtn = styled.div`
  width: max-content;
  padding: 10px 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #2401fe;
  border-radius: 10px;
  cursor: pointer;
`;

const Search = () => {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick() {
    console.log('clicked');
  }

  return (
    <StyledSearch>
      <StyledInput
        type="text"
        placeholder="Search for something"
        value={search}
        onChange={handleChange}
      />
      <StyledBtn onClick={handleClick}>Search</StyledBtn>
    </StyledSearch>
  );
};

export default Search;
