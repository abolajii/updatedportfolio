import styled, { keyframes } from "styled-components";

// import React from "react";

// Define the keyframe animation
const backgroundAnimation = keyframes`
  0% {
    background-color: #2d2d2d;
  }
  50% {
    background-color: #3d3d3d;
  }
  100% {
    background-color: #2d2d2d;
  }
`;

// Create the LoadingContainer styled component
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: ${backgroundAnimation} cubic-bezier(0.215, 0.61, 0.355, 1) 2s
    infinite;
`;

// Loading component
const Loading = () => {
  return <LoadingContainer />;
};

export default Loading;
