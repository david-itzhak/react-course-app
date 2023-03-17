import "./CostsFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="all">All</option>
          {props.yearVariants.map((yearNumber, index) => {
            return (
              <option value={yearNumber.toString()} key={index}>
                {yearNumber}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
