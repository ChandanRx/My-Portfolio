"use client"
import React from 'react'
import { Tools, languages } from '../../../Data';
import Bar from '@/components/Bar';
import { motion } from 'framer-motion';

const Resume = () => {

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

  return (
    <div className='px-6 py-2'>

      {/*Education & Experience*/}

      <div
        className="grid gap-6 md:grid-cols-2"
      >
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Bachelor Of Engineering</h5>
            <p className='font-semibold'>GEC,Gandhinagar (2022)</p>
            <p className='my-3'>I am graduated in BE in Information Technology Engineering From Government Engineering College , Gandhinagar</p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Internship</h5>
            <p className='font-semibold'>Unnati Informatics LLP.</p>
            <p className='my-3'>I Work as React Intern in Unnati Informatics and i worked on project name model united nation where i created ui using react js</p>
          </div>
        </motion.div>
      </div>



      <div className="grid gap-6 md:grid-cols-2">

        {/*Languages & Frameworks*/}

        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(lang => <Bar data={lang} key={lang.name} />)
            }
          </div>
        </div>

        {/*Tools & Softwares*/}

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className="my-2">
            {
              Tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume;