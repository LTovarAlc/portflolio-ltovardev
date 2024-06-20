/* Contenedor principal de portfolio*/

import "./portfolio.css";
import Introduce from "../components/introduce/introduce";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import AboutMe from "../components/aboutMe/aboutMe";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

const Portfolio = ({darkMode, toggleDarkMode}) => {
  return (
    <section className="portfolio">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Introduce darkMode={darkMode}/>
      <AboutMe darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </section>
  );
};

export default Portfolio;
