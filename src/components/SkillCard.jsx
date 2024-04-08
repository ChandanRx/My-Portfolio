import React from 'react'

const SkillCard = ({skills}) => {
    const {Icon,about,title} = skills
  return (
    <div className='flex items-center p-2 space-x-4'>
        <Icon className='text-indigo-500 w-14 h-14'/>
        <div>
            <h4 className='font-bold'>{title}</h4>
            <p>{about}</p>
        </div>
    </div>
  )
}

export default SkillCard