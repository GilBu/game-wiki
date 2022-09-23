import React, { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import InputGroup from "../components/Filter/category/InputGroup"
import { rawg } from "../apiKeys";



const Creators = () => {
  let [info, setInfo] = useState([])
  let { count, next, prev, results } = info;
  let pages = results ? Math.ceil(count / results.length) : 1
  // let { name, slug, image, image_backgroud, game_count } = results
  let [id, setID] = useState(1)
  let api = `https://api.rawg.io/api/creators?key=${rawg}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data)
      console.log(data)
    })();
  }, [api]);

  if (results) {
    return (
      <div className="container">
        <div className="row mb-3">
          <h1 className="text-center mb-3">
            Creator name:{" "}
            <span className="text-primary">{results[0].name === "" ? "Unknown" : results[0].name}</span>
          </h1>
          <h5 className="text-center">
            Game Count: {results[0].games_count === "" ? "Unknown" : results[0].games_count}
          </h5>
        </div>
      </div>
    )
  } else{
    return "Creators Not Found"
  }
  
}

export default Creators