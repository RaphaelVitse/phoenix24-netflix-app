const Section = (props) => {
  return (
    <>
      {props.data.map((elem, index) => {
        return (
          <section key={elem.category}>
            <h2 key={index} className="category">
              {elem.category}
            </h2>
            s
            <div className="gallery">
              {elem.images.map((img, index) => {
                return <img key={index} src={img} alt="" />;
              })}
            </div>
          </section>
        );
      })}
      s
    </>
  );
};
export default Section;
