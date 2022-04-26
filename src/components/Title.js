import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: rgb(36, 0, 255);
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 10px 0px 0;
`;

const Title = () => {
  return (
    <StyledTitle>
      <StyledH1>Box Office</StyledH1>
      <p>Are you looking for a movie or an actor?</p>
    </StyledTitle>
  );
};

export default Title;
