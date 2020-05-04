import React from 'react';
import styled from 'styled-components';

const StyledProjectItem = styled.div`
  display: flex;
  width: 90%;
  min-width: 330px;
  height: 160px;
  margin: 0.5rem 0.2rem 0.2rem 0.2rem;
  border-radius: 5px;

  background: palevioletred;
  h4 {
    color: blue;
  }
`;

const OpenSourceSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div:first-of-type {
    background: linear-gradient(
        to right top,
        rgb(219, 112, 147),
        rgb(218, 163, 87)
      )
      rgb(255, 255, 255);
  }
  div:last-of-type {
    background: linear-gradient(
        230.34deg,
        #4ca2cd 4.08%,
        rgba(255, 255, 255, 0) 96.63%
      ),
      #67b26f;
  }
`;

const Projects = () => {
  return (
    <>
      <h1>Open Source Projects</h1>

      <OpenSourceSection>
        <StyledProjectItem>
          <h4>boyyy</h4>
          <p></p>
        </StyledProjectItem>
        <StyledProjectItem>Hello</StyledProjectItem>
        <StyledProjectItem>Hello</StyledProjectItem>
        <StyledProjectItem>Hello</StyledProjectItem>
      </OpenSourceSection>
    </>
  );
};
export default Projects;
