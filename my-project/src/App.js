import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Map from "./components/Map";
function App() {
  return (
    <div>
      <Background />
      <Navbar />
      <Body />
      <Map />
    </div>
  );
}

export default App;
