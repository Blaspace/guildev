import React, {createContext} from 'react'
import schoolapp from '../public/School.PNG'
import Movie from '../public/movie.PNG'
import Portfolio from '../public/Portfolio.PNG'
import ecommerce from '../public/ecommerce.PNG'

const ProjectContext = createContext()
export function ProjectProvider({children}) {
    const project =[
        {
        name:"School managment application",
        description: "",
        img: schoolapp
    },
    {
        name:"Movie browsing platform",
        description: "",
        img: Movie
    },
     {
        name:"Portfolio website",
        description: "",
        img: Portfolio
    }, 
    {
        name:"E-commerce platform",
        description: "",
        img: ecommerce
    },
    ]
  return (
    <ProjectContext.Provider value={{project}}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
