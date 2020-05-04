import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

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
          blurb={`My Personal website & blog KarnellSchultz.com`}></ProjectItem>
        <ProjectItem
          title={'This Site ?🌍?'}
          gitLink={'https://github.com/KarnellSchultz/KarmaProject'}
          link={'#'}
          blurb={`This site (whoa that's meta 💥) made with all sorts of cool tech`}></ProjectItem>
      </OpenSourceSection>
    </>
  );
};
export default Projects;
