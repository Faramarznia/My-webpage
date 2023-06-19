import "./projectCard.css";

function ProjectCard(photo) {
console.log(photo)
  return (
    <>
      <div className="card">
        <img src={photo} alt="f" />
      </div>
    </>
  );
}
// IMAGES.map((item)=>
// <div key={item.id}>
//     <img src={item.image} alt="" />
// </div>
// )
export default ProjectCard;
