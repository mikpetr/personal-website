'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from './NavItem'
import { NotionResumeLink } from './NotionResumeLink'

export const Navigation = () => {
  const path = usePathname()

  return (
    <ul className="flex gap-x-7">
      <Link href="/">
        <NavItem active={path === '/'}>Home</NavItem>
      </Link>
      <Link href="/how-i-do-it">
        <NavItem active={path === '/how-i-do-it'}>How I Do It</NavItem>
      </Link>
      <NotionResumeLink />
    </ul>
  )
}