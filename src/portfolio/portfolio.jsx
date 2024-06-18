/* Contenedor principal de portfolio*/

import "./portfolio.css";
import Introduce from "../components/introduce/introduce";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import AboutMe from "../components/aboutMe/aboutMe";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header />
      <Introduce />
      <AboutMe/>
      <Projects/>
    </section>
  );
};

export default Portfolio;
