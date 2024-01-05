'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container, NextPage } from '@/components'
import { WavingHand } from './WavingHand'

export const HomePage = () => {
  return (
    <>
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
            }}
          >
            <Image
              key="profile-photo"
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
                <WavingHand className="text-primary-600 cursor-grab" />
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
      <NextPage type="arrow" delay={2.6} link="/how-i-do-it" />
    </>
  )
}
