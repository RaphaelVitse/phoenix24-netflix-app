import "./App.css";
import logo from "./img/logo-netflix.png";
import data from "./assets/movies.json";

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo  netflix" />
        </div>
      </header>

      <section>
        {data.map((elem) => {
          return (
            <>
              <h2 key={elem.category} className="category">
                {" "}
                {elem.category}
              </h2>
              <div className="gallery">
                {elem.images.map((img, index) => (
                  <img hey={index} src={img} alt="" />
                ))}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default App;
