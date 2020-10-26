import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyframeSpinner = keyframes`
  100% { 
    transform: rotate(360deg); 
  }
`;
const keyframeDot = keyframes`
  80%, 100% { 
    transform: rotate(360deg); 
  }
`;
const keyFrameDotBefore = keyframes`
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  }
`;
const StyledDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${keyframeDot} 2s infinite ease-in-out both;
  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: black;
    border-radius: 100%;
    animation: ${keyFrameDotBefore} 2s infinite ease-in-out both;
  }
`;
const StyledSpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${keyframeSpinner} 2.5s infinite linear both;
  ${StyledDot}:first-child {
    animation-delay: -1.1s;
    &::before {
      animation-delay: -1.1s;
    }
  }
  ${StyledDot}:nth-child(2) {
    animation-delay: -1s;
    &::before {
      animation-delay: -1s;
    }
  }
  ${StyledDot}:nth-child(3) {
    animation-delay: -0.9s;
    &::before {
      animation-delay: -0.9s;
    }
  }
  ${StyledDot}:nth-child(4) {
    animation-delay: -0.8s;
    &::before {
      animation-delay: -0.8s;
    }
  }
  ${StyledDot}:nth-child(5) {
    animation-delay: -0.7s;
    &::before {
      animation-delay: -0.7s;
    }
  }
  ${StyledDot}:nth-child(6) {
    animation-delay: -0.6s;
    &::before {
      animation-delay: -0.6s;
    }
  }
`;
const LoadingSpinner = () => {
  return (
    <div>
      <StyledSpinnerContainer>
        <StyledDot />
        <StyledDot />
        <StyledDot />
        <StyledDot />
        <StyledDot />
        <StyledDot />
      </StyledSpinnerContainer>
    </div>
  );
};

export default LoadingSpinner;
