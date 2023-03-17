import "./CostForm.css";

function CostFormSwitcher({ switchForm }) {
  return (
    <div className="new-cost__actions">
      <button onClick={switchForm}>Добавить новый расход</button>
    </div>
  );
}

export default CostFormSwitcher;
