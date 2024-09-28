import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const Link = (
  props: PropsWithChildren<LinkProps> & { className?: string }
) => {
  return (
    <NextLink
      href={props.href}
      className="no-underline hover:no-underlin text-pink-700"
      {...props}>
      {props.children}
    </NextLink>
  )
}
