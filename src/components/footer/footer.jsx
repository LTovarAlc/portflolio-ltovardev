/* footer */

import "./footer.css";
import InstaIcon from "../../assets/instaIcon.png";
import LinkedinIcon from "../../assets/linkedinIcon.png";
import XIcon from "../../assets/xIcon.png";
import GithubIcon from '../../assets/githubIcon.png'

const Footer = ({darkMode}) => {
  return (
    <footer className="footer">
      <div className="footerUp">
        <div className="principals-footer">
          <h3>Luis Tovar</h3>
          <p>
            Front-End developer specialized in building websites and web
            applications who always seeks the best way to develop a project.
          </p>
        </div>
        <div className="socials-footer">
          <h3>Social</h3>
          <div className="social-Icons__container">
            <a href="https://www.linkedin.com/in/luis-tovar-alcal%C3%A1-4193a7310/" target="_blank">
              <img src={LinkedinIcon} alt="LinkedIn LinkedInIcon IconLinkedIn Icon" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://github.com/LTovarAlc" target="_blank">
              <img src={GithubIcon} alt="GitHhub GitHubIcon IconGitHub Icon" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://x.com/LTovarDev" target="_blank">
              <img src={XIcon} alt="XIcon X Twiiter TwitterIcon IconX" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://www.instagram.com/ltovardev/" target="_blank">
              <img src={InstaIcon} alt="IconInsta InstaIcon Instagram IconBlack InstaBlack" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
          </div>
        </div>
      </div>
      <div className="footerDown">
        <p>&copy; Copyright 2024. Developed By <span className="footer-developer">Luis Tovar</span></p>
      </div>
    </footer>
  );
};

export default Footer;
