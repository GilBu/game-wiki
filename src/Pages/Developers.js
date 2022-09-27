import React, { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import InputGroup from "../components/Filter/category/InputGroup"
import { rawg } from "../apiKeys";

const Developers = () => {
  let [results, setResults] = useState([])
  let [info, setInfo] = useState([])
  let { name, slug, image_backgroud, game_count } = info
  let [id, setID] = useState(1)
  let api = `https://api.rawg.io/api/developers?key=${rawg}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data)

      
      console.log(data)
    })()
  }, [api])
}

export default Developers