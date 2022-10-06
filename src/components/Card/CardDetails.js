import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {rawg} from "../../apiKeys";

const CardDetails = ({page}) => {
  let { id } = useParams()
  let [fetchedData, updateFetchedData] = useState([])
  let { name, 
    released, 
    background_image, 
    rating, 
    rating_top, 
    ratings, 
    ratings_count, 
    review_text_count, 
    added, 
    added_by_status, 
    metacritic, 
    playtime, 
    suggestions_count, 
    updated, 
    esrb_rating, 
    platforms,
    games,
    games_count,
    image,
    image_background,
    positions, 
  } = fetchedData

  let api = `https://api.rawg.io/api/${page}/${id}?key=${rawg}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      console.log(data)
      updateFetchedData(data)
    })()
  }, [api])

  let positionList = positions ? positions.map(position => 
      <li>{position.name}</li>
  ) : null
  console.log(positionList)
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        {background_image ? <img className="img-fluid" src={background_image} alt="" /> : null}
        {image ? <img className="img-fluid" src={image} alt="" /> : null}
        {released ? <div className="fs-5">Released: {released}</div> : null}
        {rating ? <div className="fs-5">Rating: {rating}</div> : null}
        {rating_top ? <div className="fs-5">Top Rating: {rating_top}</div> : null}
        {/* {ratings ? <div className="fs-5">{ratings}</div> : null} */}
        {ratings_count ? <div className="fs-5">Rating Count: {ratings_count}</div> : null}
        {review_text_count ? <div className="fs-5">Review Text Count: {review_text_count}</div> : null}
        {added ? <div className="fs-5">Date Added: {added}</div> : null}
        {/* {added_by_status ? <div className="fs-5">{added_by_status}</div> : null} */}
        {metacritic ? <div className="fs-5">MetaCritic Score: {metacritic}</div> : null}
        {playtime ? <div className="fs-5">Playtime: {playtime}</div> : null}
        {suggestions_count ? <div className="fs-5">Suggestion Count: {suggestions_count}</div> : null}
        {updated ? <div className="fs-5">Updated: {updated}</div> : null}
        {esrb_rating ? <div className="fs-5">ESRB: {esrb_rating.name}</div> : null}
        {/* {platforms ? <div className="fs-5">{platforms}</div> : null} */}
        {games_count ? <div className="fs-5">Games Count: {games_count}</div> : null}
        {positions ? <ul>{positionList}</ul> : null}
      </div>
    </div>
  )
}

export default CardDetails