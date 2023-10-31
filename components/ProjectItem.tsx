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
  return (
    <>
      <div
        className="bg-slate-100
        bg-gradient-to-tr from-gray-100 to-zinc-200
        my-4 p-4 border flex flex-col justify-between
        h-44
        "
      >
        <div>
          <a className="" href={link}>
            {title}
          </a>
          <div className=" text-zinc-700">
            {blurb.substring(0, 100)}
          </div>
        </div>
        <div className="pt-4">
          <a
            className=" bg-zinc-300 p-2 inline-flex justify-center items-center border
            mr-2 hover:bg-zinc-400"
            href={gitLink}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-1">Source</div>
            <FaExternalLinkAlt />
          </a>
          <a
            className=" bg-zinc-300 hover:bg-zinc-400 p-2 inline-flex justify-center items-center border"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-1">Demo</div>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </>
  )
}

export { ProjectItem }
