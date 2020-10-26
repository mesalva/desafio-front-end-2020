import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppInfoContext } from './AppInfoContext';
import { useHistory } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  div:first-child {
    margin-right: 50px;
    img {
    object-fit: cover;
    border-radius: 10px;
    max-width: 600px;
    }
  }
  div:last-child {
    font-size: 18px;
    div {
      text-align: center;
      button {
        margin-top: 20px;
        padding: 10px 20px;
        width: 50%;
        font-size: 16px;
        background-color:	#6893ee;
        cursor: pointer;
        border-radius: 10px;
        border: 0;
        color: white;
        -moz-box-shadow: 2px 2px 10px 3px #ccc;
        box-shadow: 2px 2px 10px 3px #ccc;
        &:focus {
          outline: 0
        }
      }
    }
    
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5vh;
    div:first-child {
      margin: 0;
      img {
        width: 100%;
      }
    }
  }
`;
const PhotoDetail = () => {
  const [appInfo] = useContext(AppInfoContext);
  const { explanation, imgUrl, title, date } = appInfo.photoSelected;
  const history = useHistory();

  const handleClick = () => history.push('/home');

  return (
    <StyledContainer>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <h3>{`${title} | ${date}`}</h3>
        <p>{explanation}</p>
        <div>
          <button onClick={handleClick} type>Voltar para a home</button>
        </div>
        
      </div>
    </StyledContainer>
  );
};

export default PhotoDetail;
