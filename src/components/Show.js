import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const StyledShow = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2 {
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    border-radius: 20px;
  }

  @media (max-width: 992px) {
    & {
      width: 40%;
    }
  }

  @media (max-width: 767px) {
    & {
      width: 70%;

      p {
        max-width: 100%;
      }
    }
  }
`;

const StarBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
`;

const Show = ({ show, starredShows, setStarredShows }) => {
  const [isStarred, setIsStarred] = useState(
    starredShows.some(starredShow => {
      return starredShow.id === show.id;
    })
  );

  function handleStar(show, setIsStarred) {
    if (isStarred) {
      setIsStarred(false);

      setStarredShows(prevStarredShows =>
        prevStarredShows.filter(starredShow => {
          return starredShow.id !== show.id;
        })
      );
    } else {
      setIsStarred(true);

      setStarredShows(prevStarredShows => [...prevStarredShows, show]);
    }
  }

  return (
    <StyledShow>
      <img src={show.image.medium} alt={show.name} />
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <StarBtn onClick={() => handleStar(show, setIsStarred)}>
        {isStarred ? <FaStar /> : <FaRegStar />}
      </StarBtn>
    </StyledShow>
  );
};

export default Show;
