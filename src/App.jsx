import "./App.css";
import Background2 from "./assets/Background2.png";
import Navbar from "./components/navbar/Navbar";
import ProjectCard from "./components/Project-Card/projectCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main id="Home">
      <Navbar />
      <div className="landingDiv">
        <div className="darkRectangle"></div>
        <div className="landing">
          <h1 className="title-one">UI/UX Designer</h1>
          <h1 className="title-one">&</h1>
          <h1 className="title-one">Front-End Developer</h1>
        </div>
        <img src={Background2} className="background2" alt="background" />
        <div className="landingText">
          <h1 className="title-two">UI/UX Designer</h1>
          <h1 className="title-two">&</h1>
          <h1 className="title-two">Front-End Developer</h1>
        </div>
        <h4 id="h4-header">Hi, my name is Faramarz and I am a freelancer</h4>
      </div>

      <div className="aboutMe" id="about-me">
        <h3>About Me</h3>
        <p>
          I entered to the technology world and digital products with front-end
          development and the popular React library, then became interested in
          UI /UX design and now I consider myself as a UX nerd. I have been
          learning UX for a while and I am really passionate about using this
          skill for developing user experience. Not only I love working in a
          team, but also I like cooperating with others for developing and
          improving the project that we would be working on, so if you are
          looking for a creative, flexible, and hardworking person to solve your
          problems and advance the project, you can count on me.
        </p>
        <div className="loader">
          <div data-glitch="Scroll it..." className="glitch">
            Scroll it...
          </div>
          <svg
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.6055L5.31444 13.705L9.62889 10.6055"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 5.80293L5.31444 8.90243L9.62889 5.80293"
              stroke="#00FFF5"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L5.31444 4.0995L9.62889 1"
              stroke="#FF0000"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <ProjectCard />
      <Footer />
    </main>
  );
}

export default App;
