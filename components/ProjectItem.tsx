import { FaExternalLinkAlt } from 'react-icons/fa'

type ProjectItemProps = {
  title: string
  blurb: string
  link: string
  gitLink: string
}

function ProjectItem({
  title,
  blurb,
  link = '#',
  gitLink = '#',
}: ProjectItemProps) {
  // bg-gradient-to-r from-pink-400 to-pink-600
  return (
    <>
      <div
        className="bg-slate-100
        my-4 p-4 border-2 flex flex-col
        h-52 justify-between
        ">
        <div>
          <a href={link}>
            <p className="text-xlg font-semibold hover:underline py-4">
              {title}
            </p>
          </a>
          <p className="text-sm text-zinc-700">
            {blurb.substring(0, 100)}
          </p>
        </div>
        <div className="pt-4">
          <a
            className=" bg-zinc-300 p-2 inline-flex justify-center items-center border-2 
            mr-2 hover:bg-zinc-400"
            href={gitLink}
            target="_blank"
            rel="noreferrer">
            <div className="mr-1">Source</div>
            <FaExternalLinkAlt />
          </a>
          <a
            className=" bg-zinc-400 p-2 inline-flex justify-center items-center border"
            href={gitLink}
            target="_blank"
            rel="noreferrer">
            <div className="mr-1">Demo</div>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </>
  )
}

export { ProjectItem }
