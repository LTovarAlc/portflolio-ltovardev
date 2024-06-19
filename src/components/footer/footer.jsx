/* footer */

import "./footer.css";
import InstaIcon from "../../assets/instaIcon.png";
import LinkedinIcon from "../../assets/linkedinIcon.png";
import XIcon from "../../assets/xIcon.png";

const Footer = () => {
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
            <a href="">
              <img src={LinkedinIcon} alt="LinkedIn LinkedInIcon IconLinkedIn Icon" className='social-icon'/>
            </a>
            <a href="">
              <img src={InstaIcon} alt="IconInsta InstaIcon Instagram IconBlack InstaBlack" className='social-icon'/>
            </a>
            <a href="">
              <img src={XIcon} alt="XIcon X Twiiter TwitterIcon IconX" className='social-icon'/>
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
