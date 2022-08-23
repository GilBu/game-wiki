import FilterBTN from "../FilterBTN"

const Genres = ({ updateGenres, updatePageNumber }) => {
  let genres = ['action', 'strategy', 'role-playing-games-rpg', 'shooter', 'adventure', 'puzzle', 'racing', 'sports']
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button" type="button"
          data-bs-toggle="collapes" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne"
        > Genres </button>
      </h2>
      <div
        id="collapseOne" className="accordion-collapse collapse show"
        aria-labelledby="headingOne" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d flex flex-wrap gap-3">
          {genres.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="genres"
              task={updateGenres}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Genres