import React, { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import InputGroup from "../components/Filter/category/InputGroup"
import { rawg } from "../apiKeys";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";

const Creators = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { count, next, prev, results } = fetchedData;
  let pages = results ? Math.ceil(count / results.length) : 1
  let info = { count, next, pages, prev }
  let [pageNumber, updatePageNumber] = useState(1);

  let [search, setSearch] = useState("");  let [id, setID] = useState(1)
  let api = `https://api.rawg.io/api/creators?key=${rawg}&page=${pageNumber}&search=${search}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
      console.log(data)
    })();
  }, [api]);

  if (results) {
    return (
      <div className="App">
      <h1 className="text-center mb-3">Creators</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
         
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
    )
  } else{
    return "Creators Not Found"
  }
  
}

export default Creators