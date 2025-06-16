import React, {createContext} from 'react'
import schoolapp from '../public/schoolNew.png'
import Food from "../public/food.png"
import Movie from '../public/movieNew.png'
import Portfolio from '../public/portfolioNew.png'
import ecommerce from '../public/econ.png'

const ProjectContext = createContext()
export function ProjectProvider({children}) {
    const project =[
        {
        name:"School managment application",
        description: "",
        img: schoolapp
    },
    {
        name:"Food delivery application",
        description: "",
        img: Food
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
