import classes from "./navbar.module.css";
import { Link } from "react-scroll";

function Navbar(navigation) {
console.log(navigation)
  return (
    <nav className={classes.navbar}>
      <svg
        className={classes.navicon}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H200V200H0V0ZM105.639 49.0142H131.386V152.002H105.639V49.0142ZM78.1706 71.5591C65.856 78.6689 61.6367 94.4156 68.7466 106.73L81.7383 129.233C94.053 122.123 98.2723 106.376 91.1624 94.0615L78.1706 71.5591ZM28.3945 49.0142H54.4618V151.874H28.3945V49.0142ZM157.127 74.7601C164.236 74.7601 170 68.9967 170 61.8871C170 54.7776 164.236 49.0142 157.127 49.0142C150.017 49.0142 144.254 54.7776 144.254 61.8871C144.254 68.9967 150.017 74.7601 157.127 74.7601ZM170 100.505C170 107.615 164.236 113.378 157.127 113.378C150.017 113.378 144.254 107.615 144.254 100.505C144.254 93.3957 150.017 87.6323 157.127 87.6323C164.236 87.6323 170 93.3957 170 100.505ZM6 6H194V194H6V6ZM4 4H6H194H196V6V194V196H194H6H4V194V6V4Z"
          fill="url(#paint0_linear_1386_3196)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1386_3196"
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C2E9FB" />
            <stop offset="1" stopColor="#A1C4FD" />
            <stop offset="1" stopColor="#A1C4FD" />
          </linearGradient>
        </defs>
      </svg>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        My Project
      </Link>
      <Link
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        About me
      </Link>
      <Link
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact Us
      </Link>
      <select className={classes.languageSelector}>
        <option value="English">English</option>
        <option value="Farsi">Farsi</option>
      </select>
    </nav>
  );
}
export default Navbar;
