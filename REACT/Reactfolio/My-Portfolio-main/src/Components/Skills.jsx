// import React from "react";
import PropTypes from 'prop-types';

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiAdobe } from 'react-icons/si';



const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Python:<FaPython />,
    Java:<FaJava />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    AdobePhotoshop: <SiAdobe />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

Skills.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skills;

