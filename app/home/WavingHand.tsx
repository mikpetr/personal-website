'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const waveAnimation = {
  rotate: [0, 20, -10, 0],
  x: [0, 5, -5, 0],
  transition: {
    delay: 0.7,
    duration: 0.7,
  }
}

type WavingHandPropsType = {
  className: string
}

const size = 64

export const WavingHand = ({ className }: WavingHandPropsType) => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
  const waveAnimationControls = useAnimation()

  useEffect(() => {
    waveAnimationControls.start(waveAnimation)
  }, [waveAnimationControls])

  return (
    <motion.div
      animate={waveAnimationControls}
      onHoverStart={() => {
        if (!isAnimationPlaying) {
          setIsAnimationPlaying(true)
          waveAnimationControls.start(waveAnimation)
        }
      }}
      onAnimationComplete={() => {
        setIsAnimationPlaying(false)
      }}>
      <svg className={className} width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7522_497)">
          <path d="M4.86137 9.14699C5.80137 8.48999 7.21837 8.61599 8.06237 9.31299L7.09437 7.90599C6.31537 6.79499 6.59437 5.59299 7.70637 4.81299C8.81837 4.03599 11.9694 6.12499 11.9694 6.12499C11.1834 5.00299 11.3304 3.58099 12.4524 2.79399C13.5744 2.00999 15.1224 2.28099 15.9084 3.40499L26.3284 18.125L25.0004 31L13.9174 26.958L4.25037 12.625C3.45737 11.496 3.73137 9.93899 4.86137 9.14699Z" fill="#EF9645"/>
          <path d="M2.69497 17.336C2.69497 17.336 1.56297 15.686 3.21397 14.555C4.86297 13.424 5.99397 15.073 5.99397 15.073L11.245 22.731C11.426 22.429 11.624 22.131 11.845 21.837L4.55697 11.21C4.55697 11.21 3.42597 9.56099 5.07597 8.42999C6.72497 7.29899 7.85597 8.94799 7.85597 8.94799L14.711 18.945C14.966 18.737 15.227 18.528 15.496 18.323L7.54897 6.73199C7.54897 6.73199 6.41797 5.08299 8.06797 3.95199C9.71697 2.82099 10.848 4.46999 10.848 4.46999L18.795 16.059C19.087 15.88 19.376 15.725 19.666 15.561L12.238 4.72899C12.238 4.72899 11.107 3.07999 12.756 1.94899C14.405 0.817989 15.536 2.46699 15.536 2.46699L23.39 13.921L24.584 15.663C19.636 19.057 19.165 25.442 21.992 29.565C22.557 30.39 23.382 29.825 23.382 29.825C19.989 24.876 21.025 19.315 25.974 15.922L24.515 8.61999C24.515 8.61999 23.97 6.69599 25.893 6.14999C27.817 5.60499 28.363 7.52899 28.363 7.52899L30.048 12.533C30.716 14.517 31.427 16.494 32.368 18.364C35.025 23.644 33.438 30.206 28.428 33.643C22.963 37.39 15.492 35.997 11.744 30.533L2.69497 17.336Z" fill="#FFDC5D"/>
          <path d="M12 32.042C8.00001 32.042 3.95801 28 3.95801 24C3.95801 23.447 3.55301 23 3.00001 23C2.44701 23 1.95801 23.447 1.95801 24C1.95801 30 6.00001 34.042 12 34.042C12.553 34.042 13 33.553 13 33C13 32.447 12.553 32.042 12 32.042Z" fill="currentColor"/>
          <path d="M7 34C4 34 2 32 2 29C2 28.447 1.553 28 1 28C0.447 28 0 28.447 0 29C0 33 3 36 7 36C7.553 36 8 35.553 8 35C8 34.447 7.553 34 7 34ZM24 2C23.448 2 23 2.448 23 3C23 3.552 23.448 4 24 4C28 4 32 7.589 32 12C32 12.552 32.448 13 33 13C33.552 13 34 12.552 34 12C34 6.486 30 2 24 2Z" fill="currentColor"/>
          <path d="M29 0.0419922C28.448 0.0419922 28 0.447992 28 0.999992C28 1.55199 28.448 2.04199 29 2.04199C32 2.04199 33.958 4.26699 33.958 6.99999C33.958 7.55199 34.447 7.99999 35 7.99999C35.553 7.99999 35.958 7.55199 35.958 6.99999C35.958 3.16299 33 0.0419922 29 0.0419922Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_7522_497">
            <rect width="36" height="36" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  )
}