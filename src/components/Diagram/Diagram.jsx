import DiagramBar from "./DiagramBar";
import "./Diagram.css";

function Diagram({ dataSets }) {
  const valuesSet = dataSets.map((el) => el.value);
  const maxValue = Math.max(...valuesSet);

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          label={dataSet.label}
          value={dataSet.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

export default Diagram;
