import React from "react"
import Genres from "./category/Genres"
import Metacritic from "./category/Metacritic"
import Platforms from "./category/Platforms"
import Dates from "./category/Dates"
import Tags from "./category/Tags"

const Filter = ({
  pageNumber,
  genres,
  metacritic,
  platforms,
  dates,
  tags,
  updatePageNumber,
  updateGenres,
  updateMetacritic,
  updatePlatforms,
  updateDates,
  updateTags,
  listOfGenres,
  listOfPlatforms,
}) => {

  let clear = () => {
    updatePageNumber(1)
    updateGenres(listOfGenres)
    updateMetacritic("")
    updatePlatforms([...listOfPlatforms.keys()])
    updateDates("")
    updateTags("")
    window.location.reload(false)
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        {/* Category components here*/}
        <Genres
              updatePageNumber={updatePageNumber}
              updateGenres={updateGenres}
              listOfGenres={listOfGenres}
            />
            <Metacritic
              updatePageNumber={updatePageNumber}
              updateMetacritic={updateMetacritic}
            />
            <Platforms
              updatePageNumber={updatePageNumber}
              updatePlatforms={updatePlatforms}
              listOfPlatforms={listOfPlatforms}
            />
            <Dates
              updatePageNumber={updatePageNumber}
              updateDates={updateDates}
            />
      </div>
    </div>
  )
}

export default Filter