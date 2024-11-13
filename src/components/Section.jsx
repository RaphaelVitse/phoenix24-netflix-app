const Section = (props) => {
  return (
    <section>
      <h2 className="category">{props.elem.category}</h2>

      <div className="gallery">
        {props.elem.images.map((img, index) => {
          return <img key={index} src={img} alt="" />;
        })}
      </div>
    </section>
  );
};
export default Section;
