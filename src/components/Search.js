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
`;

const Search = ({ getSearchResults }) => {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    getSearchResults(search);
  }

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Search for something"
        value={search}
        onChange={handleChange}
      />
      <StyledSubmitBtn type="submit" onClick={handleClick}>
        Search
      </StyledSubmitBtn>
    </StyledForm>
  );
};

export default Search;
