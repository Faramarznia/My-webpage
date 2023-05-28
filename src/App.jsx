import classes from "./App.module.css";
import Background from "./assets/Background.png";
import Background2 from "./assets/Background2.png";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.landingDiv}>
        <img src={Background} className={classes.background} alt="background" />
        <div className={classes.darkRectangle}></div>
        <div className={classes.landing}>
          <h1>UI/UX Designer</h1>
          <h1>&</h1>
          <h1>Front-End Developer</h1>
        </div>
        <img
          src={Background2}
          className={classes.background2}
          alt="background"
        />
        <div className={classes.landingText}>
          <h2>UI/UX Designer</h2>
          <h2>&</h2>
          <h2>Front-End Developer</h2>
        </div>
        <h4>Hi, my name is Faramarz and Iam a freelancer</h4>
      </div>
      <div className={classes.aboutMe}>
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
      </div>
    </div>
  );
}

export default App;
