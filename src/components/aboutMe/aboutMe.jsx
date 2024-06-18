/* section about me*/

import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe section" id="aboutMe">
      <h2 className="section-title">About me</h2>
      <div className="aboutMe-content">
        <div className="aboutMe-text">
          <h3>Know about me</h3>
          <p>
            Hey, I’m a Front-End developer who enjoys building attractive
            websites with modern user interfaces, always adapting to any type of
            need within any project. I’m open to continuous learning because I
            love knowing all the tools available to do my job. <br /> <br /> I hope to get in
            touch with you soon!
          </p>
        </div>
        <div className="aboutMe-skills" id="skills">
            <h3>My Skills</h3>
            <div className="skills-container">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>BootStrap</span>
                <span>TailWind CSS</span>
                <span>React</span>
                <span>Figma</span>
                <span>Git</span>
                <span>Angular</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
