import "./App.css";
import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Banner />
        <Featured />
      </div>
    </div>
  );
}

export default App;
