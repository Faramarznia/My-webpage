import IMAGES from "./IMAGES";
import styles from "./projectCard.module.css";
import Separator from "./separator";

function ProjectCard() {
  return (
    <div className={styles.cards}>
      {IMAGES.map((item) => (
        <a
          className={styles.card}
          key={item.id}
          href={item.address}
          target="_blank"
          rel="noreferrer"
        >
          <img key={item.id} src={item.image} alt={item.alt} />
          <h1 key={item.id}>{item.title}</h1>
          <h2 key={item.id}>{item.title}</h2>
          <p key={item.id}>Let's take a look at my ...</p>
          <Separator key={item.id} />
        </a>
      ))}
    </div>
  );
}
export default ProjectCard;
