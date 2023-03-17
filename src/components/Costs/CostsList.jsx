import CostItem from "./CostItem";
import "./CostList.css";

function CostsList({ costs, yearFilter }) {
  return (
    <div className="cost-list">
      {costs.length > 0 ? (
        costs.map((cost) => <CostItem costItem={cost} key={cost.id} />)
      ) : (
        <h2 className="cost-list__fallback">
          В {yearFilter} году небыло расходов
        </h2>
      )}
    </div>
  );
}

export default CostsList;
