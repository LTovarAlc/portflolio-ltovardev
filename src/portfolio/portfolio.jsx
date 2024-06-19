/* Contenedor principal de portfolio*/

import "./portfolio.css";
import Introduce from "../components/introduce/introduce";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import AboutMe from "../components/aboutMe/aboutMe";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header />
      <Introduce />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </section>
  );
};

export default Portfolio;
