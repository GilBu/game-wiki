import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {rawg} from "../../apiKeys";

const CardDetails = () => {
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
  } = fetchedData

  let api = `https://api.rawg.io/api/games/${id}?key=${rawg}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      console.log(data)
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={background_image} alt="" />
        {released ? <div className="fs-5">{released}</div> : null}
        {rating ? <div className="fs-5">{rating}</div> : null}
        {rating_top ? <div className="fs-5">{rating_top}</div> : null}
        {/* {ratings ? <div className="fs-5">{ratings}</div> : null} */}
        {ratings_count ? <div className="fs-5">{ratings_count}</div> : null}
        {review_text_count ? <div className="fs-5">{review_text_count}</div> : null}
        {added ? <div className="fs-5">{added}</div> : null}
        {/* {added_by_status ? <div className="fs-5">{added_by_status}</div> : null} */}
        {metacritic ? <div className="fs-5">{metacritic}</div> : null}
        {playtime ? <div className="fs-5">{playtime}</div> : null}
        {suggestions_count ? <div className="fs-5">{suggestions_count}</div> : null}
        {updated ? <div className="fs-5">{updated}</div> : null}
        {esrb_rating ? <div className="fs-5">{esrb_rating.name}</div> : null}
        {/* {platforms ? <div className="fs-5">{platforms}</div> : null} */}
      </div>
    </div>
  )
}

export default CardDetails