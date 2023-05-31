import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/characters/Characters";
import Episodes from "./pages/episodes/Episodes";
import Locations from "./pages/locations/Location";
import Layout from "./components/Layout";
import "./App.css";
import CharacterList from "./pages/characters/CharacterList";
import CharacterDetail from "./pages/characters/CharacterDetail";
import EpisodeList from "./pages/episodes/EpisodeList";
import LocationList from "./pages/locations/LocationList";
import EpisodeDetail from "./pages/episodes/EpisodeDetail";
import LocationDetail from "./pages/locations/LocationDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="characters" element={<Characters />}>
            <Route index element={<CharacterList />}></Route>
            <Route path=":id" element={<CharacterDetail />}></Route>
          </Route>
          <Route path="episodes" element={<Episodes />}>
            <Route index element={<EpisodeList />}></Route>
            <Route path=":id" element={<EpisodeDetail />}></Route>
          </Route>
          <Route path="locations" element={<Locations />}>
            <Route index element={<LocationList />}></Route>
            <Route path=":id" element={<LocationDetail />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
