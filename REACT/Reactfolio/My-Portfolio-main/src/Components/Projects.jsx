import React from "react";
import ProjectBox from "./ProjectBox";
import FoodApp from "../images/FoodApp.png";
import CarPoint from "../images/CarPoint.png";
//import GymImage from "../images/gym.png";


const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={FoodApp} projectName="FoodApp" />
        <ProjectBox projectPhoto={CarPoint} projectName="CarPoint" />
      </div>
    </div>
  );
};

export default Projects;
