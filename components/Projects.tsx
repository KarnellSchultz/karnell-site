import { ProjectItem } from './ProjectItem'

// const OpenSourceSection = styled.div`
//   @media screen and (max-width: 890px) {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//     align-content: start;
//     gap: 0.5rem;
//   }
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   align-content: start;
//   gap: 0.75rem;
//   div::nth-of-type(1) {
//     background: linear-gradient(
//         to right top,
//         rgb(219, 112, 147),
//         rgb(218, 163, 87)
//       )
//       rgb(255, 255, 255);
//   }
//   div:nth-of-type(2) {
//     background: rgb(255, 255, 255)
//       linear-gradient(to right bottom, #add100, #7b920a) repeat scroll
//       0% 0%;
//   }
//   div:nth-of-type(3) {
//     background: rgb(255, 255, 255)
//       linear-gradient(
//         to right bottom,
//         rgb(109, 110, 114),
//         rgb(158, 160, 166)
//       )
//       repeat scroll 0% 0%;
//   }
//   div:nth-of-type(4) {
//     background: linear-gradient(
//         230.34deg,
//         #4ca2cd 4.08%,
//         rgba(255, 255, 255, 0) 96.63%
//       ),
//       #67b26f;
//   }
// `

// const StyledHeading = styled.article`
//   display: flex;
//   align-items: center;
//   button {
//     margin-left: 2rem;
//   }
// `

const Projects = () => {
  return (
    <>
      <div className="">
        <h2>Projects</h2>
      </div>
      <em>A few of my favorite open source projects.</em>
      <div className="">
        <ProjectItem
          title={'Capitals-Magellan 🧭'}
          link={'https://capitals.nellzus.se/'}
          gitLink={'https://github.com/KarnellSchultz/capitals'}
          blurb={`A game to guess the worlds capitals`}></ProjectItem>
        <ProjectItem
          title={'TypeTypeType 🚤'}
          link={'https://typetypetype.vercel.app/'}
          gitLink={'https://github.com/KarnellSchultz/typetypetype'}
          blurb={`An application to test your typing speed.`}></ProjectItem>
        <ProjectItem
          title={'Berlin Weather ⛅️'}
          gitLink={
            'https://github.com/KarnellSchultz/berlin-weather-next'
          }
          link={'https://berlin-weather.nellzus.se/'}
          blurb={'Good old weather app'}></ProjectItem>

        <ProjectItem
          title={'Myra Tracker 🐜'}
          gitLink={
            'https://github.com/KarnellSchultz/MyraTrackingApp'
          }
          link={'https://myratracker.firebaseapp.com/login.html'}
          blurb={`A 'Jira style' application created with Vue.js. This can be used to track the progress of projects.`}></ProjectItem>
      </div>
    </>
  )
}
export { Projects }
