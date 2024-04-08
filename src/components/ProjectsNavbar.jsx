import React from 'react'

export const NavItem = ({value,handleFilterCategory ,Active}) =>{
  let className = "capitalize cursor-pointer hover:text-indigo-500"
  if(Active === value) className += " text-indigo-500"

    return(
        <li className={className} key={value} onClick={()=>handleFilterCategory(value)}>
           {value}
        </li>
    )
}

const ProjectsNavbar = ({handleFilterCategory , Active}) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto font-semibold text-white list-none'>
        <NavItem value="all" handleFilterCategory={handleFilterCategory} Active={Active}/>
        <NavItem value="react" handleFilterCategory={handleFilterCategory} Active={Active}/>
        <NavItem value="node" handleFilterCategory={handleFilterCategory} Active={Active}/>
        <NavItem value="next" handleFilterCategory={handleFilterCategory} Active={Active}/>
        <NavItem value="react native" handleFilterCategory={handleFilterCategory} Active={Active}/>
    </div>
  )
}

export default ProjectsNavbar