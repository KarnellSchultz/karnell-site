import { ProjectItem } from './ProjectItem'

const Projects = () => {
  return (
    <>
      <div className="">
        <h2>Projects</h2>
      </div>
      <em>A few of my favorite open source projects.</em>
      <div
        className="grid sm:grid-cols-2 sm:gap-4">
        <div>
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
        </div>
        <div>
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
            blurb={`A 'Jira style' application created with Vue.js.`}></ProjectItem>
        </div>
      </div>
    </>
  )
}
export { Projects }
