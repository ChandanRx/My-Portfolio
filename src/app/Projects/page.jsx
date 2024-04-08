"use client"
import React, { useState } from 'react'
import { projects as ProjectsData } from '../../../Data'
import ProjectsCard from '@/components/ProjectsCard'
import ProjectsNavbar from '@/components/ProjectsNavbar'
import { motion } from 'framer-motion'

const Projects = () => {

  const [Projects, setProjects] = useState(ProjectsData);
  const [Active, setActive] = useState("all")
  const [showDetails, setShowdetails] = useState(null)

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


  const handleFilterCategory = (category) => {
    if (category === 'all') {
      setProjects(ProjectsData)
      setActive(category);
      return
    }

    const newArray = ProjectsData.filter(project => project.category.includes(category));
    setProjects(newArray)
    setActive(category)
  }
  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{ height: '65vh' }}>
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} Active={Active} />

      <motion.div
        className='relative grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {
          Projects.map(project => (
            <motion.div
              className='col-span-12 p-2 bg-gray-800 rounded-lg sm:col-span-6 lg:col-span-4'
              key={project.id}
              variants={variants}
            >
              <ProjectsCard project={project} showDetails={showDetails} setShowdetails={setShowdetails} />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects