'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavItem } from './NavItem'
import { NotionResumeLink } from './NotionResumeLink'

export const Navigation = () => {
  const path = usePathname()

  return (
    <nav className="flex gap-x-7 items-center">
      <Link href="/">
        <NavItem active={path === '/'}>Home</NavItem>
      </Link>
      <Link href="/how-i-do-it">
        <NavItem active={path === '/how-i-do-it'}>How I Do It</NavItem>
      </Link>
      <nav className="flex items-center gap-x-4">
        <NotionResumeLink />
        <Link href="https://linkedin.com/in/mikpetr" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width="18"
            height="18"
            priority />
        </Link>
        <Link href="https://github.com/mikpetr" target="_blank">
          <Image
            src="/github.svg"
            alt="Github"
            width="18"
            height="18"
            priority />
        </Link>
      </nav>
      
    </nav>
  )
}