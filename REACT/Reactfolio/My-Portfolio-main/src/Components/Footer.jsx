import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/abhinavkothakota" target="_blank" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/abhinavteenu" target="_blank" title="Personal Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com/photo__abhi__graphy" target="_blank" title="Photography Instagram">
          <FaInstagram />
        </a>
        <a href="www.linkedin.com/in/abhinavkothakota" target="_blank" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:2003abhinavk@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
