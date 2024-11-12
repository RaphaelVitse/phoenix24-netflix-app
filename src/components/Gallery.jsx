const Gallery = () => {
  return (
    <>
      <div className="gallery">
        {elem.images.map((img, index) => {
          return <img key={index} src={img} alt="" />;
        })}
      </div>
    </>
  );
};
export default Gallery;
