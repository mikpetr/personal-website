'use client'
import { Chart } from './Chart'
import { motion } from 'framer-motion'
import { Container, NextPage, NotionResumeLink } from '@/components'

export const HowIDoIt = () => {
  return (
    <>
      <Container>
        <div className="pt-20 flex justify-center items-center">
          <div className="flex w-full justify-between gap-x-12 overflow-hidden">
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
              <Chart />
            </motion.div>
            
            <div className="space-y-7">
              <motion.h2
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                className="text-2xl"
              >
                Here are three key point about<br />how I usually work.
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ delay: 0.6 }}>
                <span className="text-xl font-semibold text-sky-600">1.</span> Developing and executing <span className="font-semibold">strategic plans</span> for software development, aligning technology choices with long-term business goals.
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ delay: 1.2 }}>
                <span className="text-xl font-semibold text-amber-600">2.</span> Managing and improving the quality of code through consistent refactoring and addressing <span className="font-semibold">technical debt</span> to maintain a sustainable codebase.
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  x: 200
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{ delay: 1.8 }}>
                <span className="text-xl font-semibold text-emerald-600">3.</span> Conducting thorough <span className="font-semibold">evaluations</span> of new technologies <span className="font-semibold">before adoption</span>, considering factors such as stability, community support, and long-term viability.
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
      
      <NextPage type="custom" delay={2.4}>
        <NotionResumeLink />
      </NextPage>
    </>
  )
}