import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import CuteBox from "./components/CuteBox";
function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <CuteBox />
      <Map />
    </div>
  );
}

export default App;
