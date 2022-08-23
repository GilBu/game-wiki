import React from "react"
import Genres from "./category/Genres"
import Metacritic from "./category/Metacritic"
import Platforms from "./category/Platforms"
import Released from "./category/Released"
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
  updatePlaforms,
  updateDates,
  updateTags,
}) => {

  let clear = () => {
    updatePageNumber(1)
    updateGenres("action, strategy, role-playing-games-rpg, shooter, adventure, puzzle, racing, sports")
    updateMetacritic("")
    updatePlaforms("")
    updateDates("")
    updateTags("")
    window.location.reload(false)
  }

  return (
    <div className="col-lg-=3 col-12 mb-5">
      <div className="text-primary text-decoration-underline text-center mb-3">
        <div
          style={{ cursor: "pointer" }} onClick={clear}
          className="text-primary text-decoration-underline text-center mb-3"
          > Clear Filters</div>
          <div className="accordion" id="accordionExample">
            {/* Category components here*/}
            <Genres
              updatePageNumber={updatePageNumber}
              updateGenres={updateGenres}
            />
          </div>
      </div>
    </div>
  )
}

export default Filter