'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, Logo, NavItem, WavingHand } from '@/components'
import { motion, useAnimation } from 'framer-motion'

const waveAnimation = {
  rotate: [0, 20, -10, 0],
  x: [0, 5, -5, 0],
  transition: {
    type: 'sprting',
    ease: 'easeIn',
    delay: 0.7,
    duration: 0.7,
  }
}

export default function Home() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const waveAnimationControls = useAnimation();

  useEffect(() => {
    waveAnimationControls.start(waveAnimation)
  }, [waveAnimationControls])

  return (
    <main className="h-screen relative">
      <Container className="flex justify-between pt-7">
        <Logo />
        <ul className="flex gap-x-7">
          <NavItem active>Home</NavItem>
          <NavItem>What I do</NavItem>
          <NavItem>Resume</NavItem>
          <NavItem>Contacts</NavItem>
        </ul>
      </Container>

      <div className="absolute w-full top-[calc(50%-107px)]">
        <Container className="flex justify-center gap-x-16 stretch">
          <motion.div
            initial={{
              opacity: 0,
              x: -200
            }}
            animate={{
              opacity: 1,
              x: 0
            }}>
            <Image
              src="/profile-photo.jpg"
              alt="Profile photo"
              className="rounded-full"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAADAQADAAAAAAAAAAAAAAAAAQIEAxEh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK2seaqdVn4m2+23C9AAYn//2Q=="
              width={214}
              height={214}
              priority />
          </motion.div>
          
          <div className="w-[1px] bg-gray-300"></div>
          <div className="flex column items-center">
            <div className="text-2xl space-y-1">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                className="flex items-center gap-x-3">
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
                  <WavingHand className="text-primary-600 cursor-grab" />
                </motion.div>
                <span>Hello!</span>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ delay: 1.4 }}>
                My name is <span className="font-semibold text-primary-600">Mikayel</span>.
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ delay: 2 }}>
                I do <span className="font-semibold">front end</span>!
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      <Image
        className="absolute bottom-7 left-[calc(50%-48px)] cursor-pointer"
        src="/chevron-down.svg"
        alt=":wave"
        width={96}
        height={96}
        priority />
      
    </main>
  )
}
