import FilterBTN from "../FilterBTN"

const Dates = ({ updateDates, updatePageNumber }) => {
  let listOfDates = ['2022-01-01,2022-12-31', '2021-01-01,2021-12-31', '2020-01-01,2020-12-31', '2019-01-01,2019-12-31', '2018-01-01,2018-12-31', '2017-01-01,2017-12-31', '2016-01-01,2016-12-31', '2015-01-01,2015-12-31', '2014-01-01,2014-12-31','2013-01-01,2013-12-31']
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseFour"
          aria-expanded="false" aria-controls="collapseFour"
        > Dates </button>
      </h2>
      <div
        id="collapseFour" className="accordion-collapse collapse"
        aria-labelledby="headingFour" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {/* TODO: replace with date picker */}
          {listOfDates.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="dates"
              task={updateDates}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Dates