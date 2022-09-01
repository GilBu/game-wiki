import FilterBTN from "../FilterBTN"

const Metacritic = ({ updateMetacritic, updatePageNumber }) => {
  let listOfMetacriticScores = ["1,50", '51,60', '61,70', '71,80', '81,90', '91,100' ]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseThree"
          aria-expanded="false" aria-controls="collapseThree"
        > Metacritic </button>
      </h2>
      <div
        id="collapseThree" className="accordion-collapse collapse"
        aria-labelledby="headingThree" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {/* TODO: replace with min and max slider */}
          {listOfMetacriticScores.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="metacritic"
              task={updateMetacritic}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Metacritic