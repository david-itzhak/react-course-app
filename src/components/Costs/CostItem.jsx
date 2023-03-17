import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem({ costItem }) {
  const { costDate, costAmount } = costItem;

  return (
    <Card className="cost-item">
      <CostDate costDate={costDate} />
      <div className="cost-item__description">
        <h2>{costItem.costDescription}</h2>
        <div className="cost-item__price">${costAmount}</div>
      </div>
    </Card>
  );
}
export default CostItem;
