import IMAGES from "./IMAGES";
import styles from "./projectCard.module.css";
import Separator from "./separator";

function ProjectCard() {
  return (
    <div className={styles.cards}>
      {IMAGES.map((item) => (
        <div className={styles.card} key={item.id}>
          <img key={item.id} src={item.image} alt={item.alt} />
          <h2 key={item.id}>{item.title}</h2>
          <Separator key={item.id} />
        </div>
      ))}
    </div>
  );
}
export default ProjectCard;
