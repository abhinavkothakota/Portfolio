import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p className="P">
            Hi, my name is <b>Kothakota Abhinav</b> and I am from Hyderabad,
            India. I'm a <b>Frontend web developer</b> and a Final year
            university student pursuing <b><br />BE in Computer Science</b>. <br />
            <br />
            I enjoy developing projects with aesthetically pleasing designs,
            incorporating my unique creative approach. You can explore some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Besides coding, I enjoy playing video games, designing, editing, and
            photography in my spare time
          </p>
          <a href="https://drive.google.com/file/d/1NBQBWUGpuO2hDJjXji-hpYMLYCKHJVxp/view?usp=share_link" download className="resume-btn">
            <button className="BTN">
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="Bootstrap" />
        <Skills skill="Python" />
        <Skills skill="Java" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="AdobePhotoshop" />
      </div>
    </>
  );
};

export default About;
