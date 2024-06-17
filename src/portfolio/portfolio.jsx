/* Contenedor principal de portfolio*/

import "./portfolio.css";
import Introduce from "../components/introduce/introduce";
import Header from "../components/header/header";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header />
      <Introduce />
    </section>
  );
};

export default Portfolio;
