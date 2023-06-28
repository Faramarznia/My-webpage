import { useState } from "react";
import styles from "./projectCard.module.css";
import Separator from "./separator";

function ProjectCard() {
  const [image, setImage] = useState({
    cardImage: [
      {
        id: 1,
        image: "./images/front-end development.webp",
        alt: "Front-End Project",
        title: "Front-End Development",
        address: "https://github.com/Faramarznia",
      },
      {
        id: 2,
        image: "./images/User Experience Design.webp",
        alt: "UX Project",
        title: "User Experience Design",
        address: "https://dribbble.com/Faramarznia",
      },
      {
        id: 3,
        image: "./images/User Interface Design.webp",
        alt: "UI Project",
        title: "User Interface Design",
        address: "https://dribbble.com/Faramarznia",
      },
    ],
  });
  return (
    <section className={styles.projects}>
      <h4>Are you looking for a ...</h4>
      <h5>Let's take a look at my projects😊</h5>
      <div className={styles.cards}>
        {image.cardImage.map((item) => (
          <a
            className={styles.card}
            key={item.id}
            href={item.address}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.image} alt={item.alt} />
            <h1>{item.title}</h1>
            <h2>{item.title}</h2>
            <p>Let's take a look at my ...</p>
            <Separator />
          </a>
        ))}
      </div>
    </section>
  );
}
export default ProjectCard;
