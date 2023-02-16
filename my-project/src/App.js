import "./App.css";
import Body from "./components/body";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Map from "./components/Map";
import CuteBox from "./components/CuteBox";
import EmergencyMaps from "./components/EmergencyMaps";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Aboutus />
              <Body />
              <CuteBox />
              <Map />
            </div>
          }
        ></Route>
        <Route exact path="/EmergencyMaps" element={<EmergencyMaps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
