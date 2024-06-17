/* Seccion de Projects */

import "./projects.css";
import TapJoy from "../../assets/tapJoy.png";
import SpeedFest from "../../assets/speedFest.png";
import TacosElMezquital from "../../assets/tacosElMezquital.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        <div className="project-container">
          <img
            src={TapJoy}
            alt="TapJoyProject mechanographicMiniGame mechanographic"
            className="project-img"
          />
          <div className="project-details">
            <h3 className="project-name">TapJoy</h3>
            <p className="project-description">
              TapJoy is a platform developed by me, in which I seek to
              strengthen my skills as a web application developer. Currently, it
              only features a mini-game where the user must complete sentences
              until they achieve 5 of them. (It is in a beta state, and there
              are plans to implement more functionalities.)
            </p>
            <div className="projects-links">
              <a
                href="https://github.com/LTovarAlc/typingLikePro"
                target="_blank"
                className="links-button"
              >
                GitHub
              </a>
              <a
                href="https://tapjoy.vercel.app/"
                target="_blank"
                className="links-button"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <img
            src={SpeedFest}
            alt="TapJoyProject mechanographicMiniGame mechanographic"
            className="project-img"
          />
          <div className="project-details">
            <h3 className="project-name">SpeedFest</h3>
            <p className="project-description">
              SpeedFest is a website to promote a sports car event. It features
              a timer for a specific date and a QR code generator that allows
              generating an entry ticket to the event. This page was developed
              for a contest.
            </p>
            <div className="projects-links">
              <a
                href="https://github.com/LTovarAlc/SpeedFest"
                target="_blank"
                className="links-button"
              >
                GitHub
              </a>
              <a
                href="https://speedfest.vercel.app/"
                target="_blank"
                className="links-button"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <img
            src={TacosElMezquital}
            alt="TapJoyProject mechanographicMiniGame mechanographic"
            className="project-img"
          />
          <div className="project-details">
            <h3 className="project-name">Tacos "El Mezquital"</h3>
            <p className="project-description">
              Tacos El Mezquital is a website that I developed for a local
              restaurant that wanted to make their business known and what they
              offer. More sections and review functionality are expected to be
              added in the future.
            </p>
            <div className="projects-links">
              <a
                href="https://github.com/LTovarAlc/tacoselmezquital"
                target="_blank"
                className="links-button"
              >
                GitHub
              </a>
              <a
                href="https://tacoselmezquital-ten.vercel.app/"
                target="_blank"
                className="links-button"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
