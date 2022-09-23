import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import {rawg} from "./apiKeys";
import Creators from "./Pages/Creators";
import Developers from "./Pages/Developers";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/creators" element={<Creators />} />

        <Route path="/developers" element={<Developers />} />
      </Routes>
    </Router>
  );
}


const Home = () => {

  let listOfPlatforms = [
    "pc",
    "playstation5",
    "xbox-one",
    "playstation4",
    "xbox-series-x",
    "nintendo-switch",
    "ios",
    "android",
    "nintendo-3ds",
    "nintendo-ds",
    "nintendo-dsi",
    "macos",
    "linux",
    "xbox360",
    "xbox-old",
    "playstation3",
    "playstation2",
    "playstation1",
    "ps-vita",
    "psp",
    "wii-u",
    "wii",
    "gamecube",
    "nintendo-64",
    "game-boy-advance",
    "game-boy-color",
    "game-boy",
    "snes",
    "nes",
    "macintosh",
    "apple-ii",
    "commodore-amiga",
    "atari-7800",
    "atari-5200",
    "atari-2600",
    "atari-flashback",
    "atari-8-bit",
    "atari-st",
    "atari-lynx",
    "atari-xegs",
    "genesis",
    "sega-saturn",
    "sega-cd",
    "sega-32x",
    "sega-master-system",
    "dreamcast",
    "3do",
    "jaguar",
    "game-gear",
    "neogeo",
  ]

  let listOfGenres = [
    "action",
    "indie",
    "adventure",
    "role-playing-games-rpg",
    "strategy",
    "shooter",
    "casual",
    "simulation",
    "puzzle",
    "arcade",
    "platformer",
    "racing",
    "massively-multiplayer",
    "sports",
    "fighting",
    "family",
    "board-games",
    "educational",
    "card"
  ]

  let date = new Date();
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);

  let [fetchedData, updateFetchedData] = useState([]);
  let { count, next, prev, results } = fetchedData;

  let pages = results ? Math.ceil(count / results.length) : 1
  let info = { count, next, pages, prev }
  let [pageNumber, updatePageNumber] = useState(1);

  let [search, setSearch] = useState("");

  let [genres, updateGenres] = useState(listOfGenres)
  let [metacritic, updateMetacritic] = useState("") //80,100
  let [platforms, updatePlatforms] = useState([...listOfPlatforms.keys()])
  let [dates, updateDates] = useState("") //2022-01-01,2022-12-31
  let [tags, updateTags] = useState("jrpg")

  let api = `https://api.rawg.io/api/games?key=${rawg}&dates=${dates}&page=${pageNumber}&search=${search}&genres=${genres}&metacritic=${metacritic}&platforms=${platforms}&ordering=-metacritic`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  
  return (
    <div className="App">
      <h1 className="text-center mb-3">Games</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            genres={genres}
            metacritic={metacritic}
            platforms={platforms}
            dates={dates}
            tags={tags}
            updatePageNumber={updatePageNumber}
            updateGenres={updateGenres}
            updateMetacritic={updateMetacritic}
            updatePlatforms={updatePlatforms}
            updateDates={updateDates}
            updateTags={updateTags}
            listOfGenres={listOfGenres}
            listOfPlatforms={listOfPlatforms}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default App;
