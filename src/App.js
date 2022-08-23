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



function App() {

  let date = new Date();
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().slice(0, 10);
  
  let [fetchedData, updateFetchedData] = useState([]);
  let { count, next, prev, results } = fetchedData;

  let pages = results ? Math.ceil(count / results.length) : 1
  let info = { count, next, pages, prev}
  let [pageNumber, updatePageNumber] = useState(1);

  let [search, setSearch] = useState("");

  let [genres, updateGenres] = useState("1,2,3,4,5,6,7,8,9,10")
  let [metacritic, updateMetacritic] = useState("") //80,100
  let [platforms, updatePlatforms] = useState("")
  let [dates, updateDates] = useState("") //2022-01-01,2022-12-31
  let [tags, updateTags] = useState("jrpg")   
  
  let api = `https://api.rawg.io/api/games?key=${rawg}&dates=${dates}&page=${pageNumber}&search=${search}&genres=${genres}&metacritic=${metacritic}&plaforms=${platforms}&ordering=-metacritic`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log(fetchedData)

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
