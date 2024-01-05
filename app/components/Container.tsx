import { ReactNode } from 'react'
import clsx from 'clsx'

type ContainerPropsType = {
  children: ReactNode
  className?: string
}

const containerStyles = 'mx-auto max-w-5xl'

export const Container = ({ children, className }: ContainerPropsType) => {
  return <div className={clsx(className, containerStyles)}>{children}</div>
}