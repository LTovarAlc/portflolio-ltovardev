/* Introduccion de mi como desarrollador */
import "./introduce.css";
import ProfilePic from "../../assets/profilePic.png";

const Introduce = () => {
  return (
    <section className="introduce">
      <img
        src={ProfilePic}
        alt="LtovarDEV profilePicDeveloper DeveloperAnime"
        className="profilePic"
      />
      <h1 className="introduce-title">Front-End Developer</h1>
      <a href="#aboutMe"><button class="button">Sobre mi</button></a>
    </section>
  );
};

export default Introduce;
