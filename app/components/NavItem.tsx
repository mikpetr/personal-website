import { ReactNode } from 'react'
import clsx from 'clsx'

type NavItemType = {
  children: ReactNode
  active?: boolean
  className?: string
}

const defaultStyles = ''
const activeStyles = 'text-primary-600 font-semibold'

export const NavItem = ({ children, active = false, className }: NavItemType) => {
  return (
    <li className={clsx(className, active ? activeStyles : defaultStyles)}>{children}</li>
  )
}