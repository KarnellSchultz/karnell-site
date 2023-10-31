import { ProjectItem } from './ProjectItem'

const Projects = () => {
  return (
    <>
      <div>
        <h2>Projects</h2>
      </div>
      <em>A few of my favorite open source projects.</em>
      <div className="grid sm:grid-cols-2 row- sm:gap-4">
        <div>
          <ProjectItem
            title={'Capitals-Magellan 🧭'}
            link={'https://capitals.nellzus.se/'}
            gitLink={'https://github.com/KarnellSchultz/capitals'}
            blurb={`A game to guess the worlds capitals`}
          ></ProjectItem>
        </div>
        <ProjectItem
          title={'TypeTypeType 🚤'}
          link={'https://typetypetype.vercel.app/'}
          gitLink={'https://github.com/KarnellSchultz/typetypetype'}
          blurb={`An application to test your typing speed.`}
        ></ProjectItem>
      </div>
    </>
  )
}
export { Projects }
