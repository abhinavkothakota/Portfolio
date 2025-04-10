import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import PropTypes from 'prop-types';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CarPointDesc:
      "Designed and developed a Vehicle Service Application using modern web technologies. The platform enables users to schedule and manage vehicle maintenance, while service providers can efficiently handle appointments and track inventory.",
    CarPointGithub: "https://ak-carpoint.vercel.app",
    FoodAppDesc:
      "Designed a mobile food app in Figma, focusing on UI/UX to ensure a seamless experience for browsing menus, placing orders, and managing deliveries.",
    FoodAppFigma: "https://www.figma.com/proto/bTkxc3r2SOpZSpISxn3mQQ/TEENU2?page-id=0%3A1&node-id=79-1734&p=f&viewport=-654%2C359%2C0.6&t=TbsdZ2pHull7cFYt-1&scaling=scale-down&content-scaling=fixed",

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
