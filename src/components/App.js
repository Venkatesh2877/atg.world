import Navbar from "./Navbar";
import Section from "./Section";
import Header from "./Header";
import Card from "./Card";
import Smallcard from "./Smallcard";
import Location from "./Location";
import Recommend from "./Recommend";

function App() {
  return (
    <div className="App">
      <div className="d-none d-lg-block">
        <Navbar />
      </div>

      <Header />
      <div>
        <Section />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <Card />
              <Smallcard />
            </div>
            <div className="col-sm-3 d-none d-sm-block">
              <Location />
              <Recommend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
