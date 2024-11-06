"use client"
import { skills } from "../../Data";
import SkillCard from "@/components/SkillCard";
import { motion } from 'framer-motion'

export default function Home() {

  const variants = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">Hey There!👋 I'm Chandan Pargi , a Software developer with a passion for creating awesome digital experiences using ReactJS , React Native , Node js , Next js. let's collaborate and create some mind-blowing project together! 💻</h5>
      <div className="h-full p-5 bg-gray-950" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide text-white">What I Know</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {
            skills.map(skills =>
            (
              <motion.div
                className="text-white bg-gray-900 rounded-lg lg:col-span-1"
                key={skills.title}
                variants={variants}
              >
                <SkillCard skills={skills} />
              </motion.div>
            )
            )
          }
      </motion.div>
    </div>
    </div >
  );
}
