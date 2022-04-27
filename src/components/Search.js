import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const StyledSubmitBtn = styled.button`
  padding: 10px 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #2401fe;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    background-color: #1a00bf;
    color: #9d9d9d;
  }
`;

const Search = ({ getSearchQuery }) => {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (!isSearching) getSearchQuery(search, setIsSearching);
  }

  return (
    <StyledForm>
      <StyledInput
        type="text"
        autoFocus
        placeholder="Search for something"
        value={search}
        onChange={handleChange}
      />
      <StyledSubmitBtn
        disabled={isSearching}
        type="submit"
        onClick={handleClick}
      >
        Search
      </StyledSubmitBtn>
    </StyledForm>
  );
};

export default Search;
