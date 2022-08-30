import FilterBTN from "../FilterBTN"

const Metacritic = ({ updateMetacritic, updatePageNumber }) => {
  let listOfMetacriticScores = ["1,50", '51,60', '61,70', '71,80', '81,90', '91,100' ]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button" type="button"
          data-bs-toggle="collapes" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne"
        > Metacritic </button>
      </h2>
      <div
        id="collapseOne" className="accordion-collapse collapse show"
        aria-labelledby="headingOne" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d flex flex-wrap gap-3">
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