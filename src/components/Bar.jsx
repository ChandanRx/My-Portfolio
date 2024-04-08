import React from 'react'
import { motion } from 'framer-motion'

const Bar = ({ data }) => {
  const { Icon, level, name } = data
  const bar_width = `${level}`

  return (
    <div className='my-2 text-white bg-gray-300 rounded-full'>
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-500"
        style={{ width: bar_width }}
        initial={{ width: 0 }}  
        animate={{ width: bar_width, transition: { duration: 0.4 ,type:"spring",damping:10,stiffness:100} }}
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar;