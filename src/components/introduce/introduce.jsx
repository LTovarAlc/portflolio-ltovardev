/* Introduccion de mi como desarrollador */
import "./introduce.css";
import ProfilePic from "../../assets/profilePic.png";
import "animate.css";

const Introduce = () => {
  return (
    <section className="introduce">
      <div className="introduce-gretting">
        <img
          src={ProfilePic}
          alt="LtovarDEV profilePicDeveloper DeveloperAnime"
          className="profilePic"
        />
        <div className="gretting-text animate__animated animate__fadeInRight animate__delay-1s">
          <span className="Hey">Hey</span>
          <p className="name">, I'm Luis Tovar</p>
        </div>
      </div>
      <h1 className="introduce-title">Front-End Developer</h1>
      <a href="#aboutMe">
        <button className="button">About me</button>
      </a>
    </section>
  );
};

export default Introduce;
