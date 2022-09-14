import FilterBTN from "../FilterBTN"

const Platforms = ({ updatePlatforms, updatePageNumber, listOfPlatforms }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseTwo"
          aria-expanded="false" aria-controls="collapseTwo"
        > Platforms </button>
      </h2>
      <div
        id="collapseTwo" className="accordion-collapse collapse"
        aria-labelledby="headingTwo" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {listOfPlatforms.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="platforms"
              task={updatePlatforms}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Platforms