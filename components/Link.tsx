export const StyledLink = ({ children, href = '#' }) => {
  return (
    <a
      className="text-pink-500 cursor-pointer
  hover:bg-pink-400 hover:text-white
  p-0.5 rounded-sm
  transition-all
  "
      href={href}>
      {children}
    </a>
  )
}
