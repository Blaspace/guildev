import React, { createContext } from "react";
import schoolapp from "../public/schoolNew.png";
import Food from "../public/food.png";
import Movie from "../public/movieNew.png";
import Portfolio from "../public/portfolioNew.png";
import ecommerce from "../public/econ.png";

const ProjectContext = createContext();
export function ProjectProvider({ children }) {
  const project = [
    {
      name: "School managment application",
      tools: [],
      description:
        "Developed a comprehensive school management application that enables schools to efficiently manage their operations, including student and teacher administration, billing, and communication",
      img: schoolapp,
      url: "https://school-manager-o95d.onrender.com/",
      features: [
        "Register and onboard school profiles",
        "Login with school-assigned credentials",
        "Login with student credentials"
      ]
    },
    {
      name: "Real estate shared investment web app",
      tools: [],
      description:
        "Led the end-to-end development and deployment of a real estate investment platform as a full-stack developer and consultant. Collaborated with stakeholders to translate business requirements into a scalable web solution, integrating secure payment systems and building robust admin tools. Then follow it with the detailed experience",
      img: require("../public/real.png"),
      url: "https://youfeathomes.com.ng/",
    },
    {
      name: "Movie browsing platform",
      tools: [],
      description: "Myflix is an immersive web application that seamlessly combines the power of Node.js and React to create a dynamic and user-friendly movie browsing experience. This platform enables users to explore a diverse range of movie categories and download their favorite films with ease.",
      img: Movie,
      url: "https://movie-nzm2.onrender.com/",
    },
    {
      name: "Food delivery application",
      tools: [],
      description:
        "Developed a full-stack web app enabling users to discover and order from local restaurants based on their location. The platform integrates real-time geolocation tracking, restaurant listings, and a secure payment gateway for a seamless food ordering experience.",
      img: Food,
      url: "https://restaurant-aosa.onrender.com/",
    },
    {
      name: "Portfolio website",
      tools: [],
      description: "",
      img: Portfolio,
      url: "https://jamesdev.com.ng",
    },
    {
      name: "E-commerce platform",
      tools: [],
      description: "A dynamic online store built for modern shoppers, combining sleek design with intuitive user flow to create an effortless shopping experience.",
      img: ecommerce,
      url: "https://shopsmart-razv.onrender.com/",
    },
  ];
  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
