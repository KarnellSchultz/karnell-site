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
        my-4 p-4 border flex flex-col
         justify-between
        ">
        <div>
          <a href={link}>
            <p className="prose-xlg prose-gray hover:underline">
              {title}
            </p>
          </a>
          <p className="prose-sm text-zinc-700">
            {blurb.substring(0, 100)}
          </p>
        </div>
        <div className="pt-4">
          <a
            className=" bg-zinc-300 p-2 inline-flex justify-center items-center border
            mr-2 hover:bg-zinc-400"
            href={gitLink}
            target="_blank"
            rel="noreferrer">
            <div className="mr-1">Source</div>
            <FaExternalLinkAlt />
          </a>
          <a
            className=" bg-zinc-300 hover:bg-zinc-400 p-2 inline-flex justify-center items-center border"
            href={link}
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
