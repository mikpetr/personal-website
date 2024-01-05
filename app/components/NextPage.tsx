'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type ArrowLinkPropsType = {
  type: 'arrow'
  link: string
}

type CustomLinkPropsType = {
  type: 'custom'
  children: ReactNode
}

type NextPagePropsType = {
  delay: number
} & (ArrowLinkPropsType | CustomLinkPropsType)

export const NextPage = (props: NextPagePropsType) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ delay: props.delay, duration: 0.5 }}
      className="absolute bottom-7 left-[calc(50%-48px)] ">
      {props.type === 'custom' ? props.children : (
        <Link href={props.link}>
          <Image
            className="cursor-pointer"
            src="/chevron-down.svg"
            alt=":wave"
            width={96}
            height={96}
            priority />
        </Link>
      )}
      
    </motion.div>
  )
}