import "./App.css";

import data from "./assets/movies.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <Section />
      {/* <section>
        {data.map((elem) => {
          return (
            <>
              

              <h2 key={elem.category} className="category">
                {elem.category}
              </h2>

              <div className="gallery">
                {elem.images.map((img, index) => {
                  return <img key={index} src={img} alt="" />;
                })}
              </div>
            </>
          );
        })}
      </section> */}
    </>
  );
}

export default App;
