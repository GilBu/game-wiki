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
  let api = `https://api.rawg.io/api/games?key=${rawg}&dates=${firstDay},${lastDay}&page=2`

  let [fetchedData, updateFetchedData] = useState([]);
  let { next, prev, results } = fetchedData;
  console.log(fetchedData)
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  

  return (
    <div className="App">
      <h1 className="text-center mb-3">Games</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
