import { ReactNode } from 'react'

type NavItemType = {
  children: ReactNode;
  active?: boolean;
}

const defaultStyles = ''
const activeStyles = 'text-primary-600 font-semibold'

export const NavItem = ({ children, active = false }: NavItemType) => {
  return (
    <li className={active ? activeStyles : defaultStyles}>{children}</li>
  )
}