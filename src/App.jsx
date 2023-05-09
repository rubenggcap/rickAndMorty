import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Locations from "./Location";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="characters" element={<Characters />}></Route>
          <Route path="episodes" element={<Episodes />}></Route>
          <Route path="locations" element={<Locations />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
