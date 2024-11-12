import data from "../assets/movies.json";

const Section = () => {
  return (
    <>
      {data.map((elem) => {
        return (
          <section>
            <h2 key={elem.category} className="category">
              {elem.category}
            </h2>

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
