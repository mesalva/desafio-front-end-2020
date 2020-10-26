/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AppInfoContext } from './AppInfoContext';

const StyledImageContainer = styled.div`
  position: relative;
  margin: 10px 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  -moz-box-shadow: 2px 2px 10px 3px #ccc;
  box-shadow: 2px 2px 10px 3px #ccc;
  padding-bottom: 10px;
  width: 250px;
  height: 300px;
  img {
    object-fit: cover;
    /* max-width: 250px; */
    width: 250px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
  }
  span {
    margin: 5px;
    color: white;
    position: absolute;
    right: 0;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-size: 18px;
  }
  div {
    padding: 10px;
  }
`;
const Photo = ({ date, explanation, title, imgUrl }) => {
  const history = useHistory();
  const [appInfo, setAppInfo] = useContext(AppInfoContext);

  const handleClick = () => {
    setAppInfo((prevState) => {
      return {
        ...prevState,
        photoSelected: {
          date,
          explanation,
          title,
          imgUrl,
        },
      };
    });
    history.push(`/photo-details/${date}`);
  };

  return (
    <div>
      <StyledImageContainer>
        <span>{date}</span>
        <img
          onClick={handleClick}
          src={imgUrl}
          alt="https://via.placeholder.com/200"
          onKeyDown={handleClick}
        />
        <div>
          <h3>{title}</h3>
        </div>
      </StyledImageContainer>
    </div>
  );
};

export default Photo;
