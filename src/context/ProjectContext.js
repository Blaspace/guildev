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
        img: schoolapp,
        url: "https://school-manager-o95d.onrender.com/"
    },
    
    {
        name:"Movie browsing platform",
        description: "",
        img: Movie,
        url: "https://movie-nzm2.onrender.com/"
    },
    {
        name:"Food delivery application",
        description: "",
        img: Food,
        url: "https://restaurant-aosa.onrender.com/"
    },
     {
        name:"Portfolio website",
        description: "",
        img: Portfolio,
        url: "https://jamesdev.com.ng"
    }, 
    {
        name:"E-commerce platform",
        description: "",
        img: ecommerce,
        url: "https://shopsmart-razv.onrender.com/"
    },
    ]
  return (
    <ProjectContext.Provider value={{project}}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
