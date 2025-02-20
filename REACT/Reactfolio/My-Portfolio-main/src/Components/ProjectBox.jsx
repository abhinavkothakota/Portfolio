import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import PropTypes from 'prop-types';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CarPointDesc:
      "Designed and developed a Vehicle Service Application using modern web technologies. The platform enables users to schedule and manage vehicle maintenance, while service providers can efficiently handle appointments and track inventory.",
    CarPointGithub: "https://github.com/abhinavkothakota/VehicleServiceManagement-CARPOINT",
    FoodAppDesc:
      "Designed a mobile food app in Figma, focusing on UI/UX to ensure a seamless experience for browsing menus, placing orders, and managing deliveries.",
    FoodAppFigma: "https://www.figma.com/design/bTkxc3r2SOpZSpISxn3mQQ/TEENU2?node-id=0-1&t=WAvaf7g6faZE8BG3-1",

  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        {projectName === "CarPoint" ? (
          <a href={desc[projectName + "Github"]} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        ) : (
          <a href={desc[projectName + "Figma"]} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaFigma /> Figma
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

ProjectBox.propTypes = {
  projectPhoto: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired
};

export default ProjectBox;
