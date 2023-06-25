import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <svg
        width="1280"
        height="51"
        viewBox="0 0 1280 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="-0.5"
          x2="1280"
          y2="-0.5"
          transform="matrix(1 0 0 -1 0 50)"
          stroke="#939393"
        />
        <line
          y1="-0.5"
          x2="1080"
          y2="-0.5"
          transform="matrix(1 0 0 -1 100 40)"
          stroke="#939393"
        />
        <line
          y1="-0.5"
          x2="880"
          y2="-0.5"
          transform="matrix(1 0 0 -1 200 30)"
          stroke="#939393"
        />
        <line
          y1="-0.5"
          x2="480"
          y2="-0.5"
          transform="matrix(1 0 0 -1 400 20)"
          stroke="#939393"
        />
        <line
          y1="-0.5"
          x2="280"
          y2="-0.5"
          transform="matrix(1 0 0 -1 500 10)"
          stroke="#939393"
        />
        <line
          y1="-0.5"
          x2="80"
          y2="-0.5"
          transform="matrix(1 0 0 -1 600 0)"
          stroke="#939393"
        />
      </svg>

      <h5>Follow me on the following social networks:</h5>
      <div className={Styles.container}>
        <a
          className={`${Styles.icon} ${Styles.instagram}`}
          href="https://instagram.com/faramarz_2f?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/instagram.svg" alt="Instagram" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.figma}`}
          href="https://www.figma.com/@faramarz3"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/figma-icon.svg" alt="Figma" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.whatsApp}`}
          href="Call Me"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/WhatsApp.svg" alt="WhatsApp" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.linkedIn}`}
          href="https://www.linkedin.com/in/faramarznia/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/linkedIn-icon.svg" alt="LinkedIn" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.gitHub}`}
          href="https://github.com/Faramarznia"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/github-icon.svg" alt="GitHub" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.faramarznia}`}
          href="https://mohammadfaramarznia.com//home"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/Faramarznia-icon.svg" alt="Faramarznia" />
        </a>
        <a
          className={`${Styles.icon} ${Styles.dribbble}`}
          href="https://dribbble.com/Faramarznia"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/dribbble-icon.svg" alt="Dribbble" />
        </a>
      </div>
      <p>©Copyright. All rights reserved.</p>
      <div className={Styles.buttonLine}></div>
    </footer>
  );
};

export default Footer;
