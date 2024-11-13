import "./App.css";

import data from "./assets/movies.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      {data.map((elem) => {
        return <Section elem={elem} key={elem.category} />;
      })}
    </>
  );
}

export default App;
