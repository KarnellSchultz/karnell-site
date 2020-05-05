import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const OpenSourceSection = styled.div`
  @media screen and (max-width: 890px) {
    display: flex;
    justify-content: center;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
  div:nth-of-type(3n) {
    background: rgb(255, 255, 255)
      linear-gradient(
        to right bottom,
        rgb(109, 110, 114),
        rgb(158, 160, 166)
      )
      repeat scroll 0% 0%;
  }
`;

const StyledHeading = styled.article`
  display: flex;
  align-items: center;
  button {
    margin-left: 2rem;
  }
`;

const Projects = () => {
  return (
    <>
      <StyledHeading>
        <h2>Projects</h2>
      </StyledHeading>
      <em>A few of my favorite open source projects.</em>
      <OpenSourceSection>
        <ProjectItem
          title={'GraphQL Blog 🚀'}
          gitLink={'https://github.com/KarnellSchultz/KarmaProject'}
          link={'https://upbeat-karma.netlify.app/'}
          blurb={
            'Web app using Redux, GraphQL, React, and all sorts of cool tech & themes.'
          }></ProjectItem>
        <ProjectItem
          title={'Soda React From 🥃'}
          link={'https://soda-react-form.netlify.com/'}
          gitLink={'https://github.com/KarnellSchultz/ReactFormWork'}
          blurb={`A slick looking React form using hooks and React-Spring animations.`}></ProjectItem>

        <ProjectItem
          title={'Myra Tracker 🐜'}
          gitLink={
            'https://github.com/KarnellSchultz/MyraTrackingApp'
          }
          link={'https://myratracker.firebaseapp.com/login.html'}
          blurb={`A 'Jira style' application created with Vue.js. This can be used to track the progress of projects.`}></ProjectItem>
        <ProjectItem
          title={'KarnellSchultz.com 🔥'}
          link={'https://karnellschultz.com/'}
          gitLink={'https://github.com/KarnellSchultz/karnell-site'}
          blurb={`My Personal website & blog 🤙🏾`}></ProjectItem>
      </OpenSourceSection>
    </>
  );
};
export default Projects;
